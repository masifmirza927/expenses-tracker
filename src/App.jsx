import { useState } from 'react'
import './App.css'
import IncomeModal from './components/IncomeModal'

function App() {
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className='container'>
        <div className='bg-dark text-white p-3'>
          <h1 className='text-center mb-5'>Expense Tracker</h1>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <h3>Amount In</h3>
              <h5 className='text-success'>$50000</h5>
              <button className='btn btn-success' onClick={openModal}>Add Income</button>

              <IncomeModal show={isModalOpen} handleClose={closeModal} /> 

            </div>
            <div className='col-md-6 text-center'>
              <h3>Balance</h3>
              <h5 className='text-danger'>$5000</h5>
              <button className='btn btn-danger'>Add Expense</button>
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
              <tr>
                <td>01/01/2023</td>
                <td>Payment</td>
                <td>Salary</td>
                <td>$5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
