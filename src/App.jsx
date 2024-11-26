import { useEffect, useState } from 'react'
import './App.css'
import IncomeModal from './components/IncomeModal'
import ExpenseModal from './components/ExpenseModal';
import ExpenseCard from './components/ExpenseCard';

function App() {
    // Initialize states directly from localStorage
    const [income, setIncome] = useState(() => {
      const storedIncome = localStorage.getItem('income');
      return storedIncome ? JSON.parse(storedIncome) : 0;
    });
    const [expenses, setExpenses] = useState(() => {
      const storedExpenses = localStorage.getItem('expenses');
      return storedExpenses ? JSON.parse(storedExpenses) : [];
    });

  const [balance, setBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [isIncomModalOpen, setIsIncomModalOpen] = useState(false);

  // expense modal state
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  // open the income modal function
  const openIncomModal = () => {
    setIsIncomModalOpen(true);
  };

  // close income modal function  
  const handleIncomModalClose = () => {
    setIsIncomModalOpen(false);
  };

  // open expense modal
  const openExpenseModal = () => {
    setIsExpenseModalOpen(true);
  }

  const closeExpenseModal = () => {
    setIsExpenseModalOpen(false);
  }

  // add income 
  const handleIncome = (amount) => {
    // es6 +amount is converting string amount to number
    setIncome(income + +amount);
    handleIncomModalClose();
  }


  const handleExpense = (expenseObj) => {
    console.log(expenseObj);

    // update remaining balance
    setBalance(income - +expenseObj.expense);
    setExpenses([...expenses, expenseObj]);
  }

useEffect(() => {
    // update total expenses
    let totalExpense = 0;
    expenses.forEach((e) => {
      totalExpense += +e.expense;
    });
    // update remaining balance
    setBalance(income - +totalExpense);
    setTotalExpense(totalExpense);

    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expenses', JSON.stringify(expenses));

  }, [expenses, income]);


  return (
    <>
      <div className='container'>
        <div className='bg-dark text-white p-3'>
          <h1 className='text-center mb-5'>Expense Tracker</h1>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h3>Amount In</h3>
              <h5 className='text-success'>${income}</h5>
              <button className='btn btn-success btn-sm' onClick={openIncomModal}>Add Income</button>
              <IncomeModal handleIncome={handleIncome} isIncomModalOpen={isIncomModalOpen} handleIncomModalClose={handleIncomModalClose} />
            </div>

            <div className='col-md-4 text-center'>
              <h3>Expenses</h3>
              <h5 className='text-warning'>${totalExpense}</h5>
            </div>

            <div className='col-md-4 text-center'>
              <h3>Remaining</h3>
              <h5 className='text-danger'>${balance}</h5>
              <button className='btn btn-danger btn-sm' onClick={openExpenseModal}>Add Expense</button>
              <ExpenseModal handleExpense={handleExpense} isExpenseModalOpen={isExpenseModalOpen} closeExpenseModal={closeExpenseModal} />
            </div>
          </div>
        </div>
        <div className='p-3 bg-white'>
          <table className='table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                expenses.map((ex, i) => {
                  return (
                    <ExpenseCard ex={ex} key={i} />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
