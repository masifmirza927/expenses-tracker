import React, { useState } from 'react'

function ExpenseModal({ show, handleClose, updateBalance }) {
    const [amount, setAmount] = useState(0);

    if (!show) {
        return null;
    }

    const handleUpdateBalance = () => {
        updateBalance(amount);
        setAmount(0);
    };

    return (
        <div className="mdl-overlay" onClick={handleClose}>
            <div className="mdl-container" onClick={(e) => e.stopPropagation()}>
                <div className="mdl-header">
                    <button onClick={handleClose} className="close-button">X</button>
                </div>
                <div className="mdl-body">
                    <h5>Add Expense</h5>
                    <div className='form-group d-flex gap-2'>
                        <input type="text" className='form-control' 
                            onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter Expense" />
                        <button onClick={handleUpdateBalance} className="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseModal