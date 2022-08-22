import React from "react";
import './NewExpense.scss';

import ExpenseForm from "./form/ExpenseForm";

const NewExpense = (props) =>{

    const SaveExpenseDataHandler = (enterdExpenseData) => {

        const expenseData = {
            ...enterdExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />       
        </div>
    );
};

export default NewExpense;