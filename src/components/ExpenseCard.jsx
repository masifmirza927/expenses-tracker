import React from 'react'

const ExpenseCard = (props) => {
    return (
        <tr>
            <td>{props.ex.date}</td>
            <td>{props.ex.detail}</td>
            <td>{props.ex.category}</td>
            <td>${props.ex.expense}</td>
        </tr>
    )
}

export default ExpenseCard