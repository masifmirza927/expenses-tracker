import React from 'react'

function IncomeModal({ show, handleClose }) {

    if (!show) {
        return null;
    }

    return (
        <div className="mdl-overlay" onClick={handleClose}>
            <div className="mdl-container" onClick={(e) => e.stopPropagation()}>
                <div className="mdl-header">
                    <button onClick={handleClose} className="close-button">X</button>
                </div>
                <div className="mdl-body">
                    <h5>Add Income</h5>
                    <div className='form-group d-flex gap-2'>
                        <input type="text" className='form-control' placeholder="Enter Income" />
                        <button className="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeModal