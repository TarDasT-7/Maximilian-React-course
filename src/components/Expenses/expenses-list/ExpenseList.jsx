import React from "react";
import './ExpenseList.scss';

import ExpenseItem from "../expense-item/ExpenseItem";

const ExpenseList = props => {
    
    if(props.items.length === 0)
    {
        return <h2 className="expenses-list__fallback"> Found No Expenses! </h2>;
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map(
                    expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )
            }
        </ul>
    );

}


// let expensesContent = <p> No Expenses Found! </p>;
// if(props.items.length > 0)
// {
//     expensesContent = (props.items.map(expense =><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
// }

export default ExpenseList;