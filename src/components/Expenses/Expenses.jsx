import React , {useState} from "react";
import './Expenses.scss'

import Card from "../UI/card/Card";
import ExpenseFilter from "./expenses-filter/ExpenseFilter";
import ExpenseList from "./expenses-list/ExpenseList";
import ExpenseChart from "./expense-chart/ExpenseChart";

const Expenses = (props) =>{

    const [filteredYear , setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }



    const filteredExpenses = filteredYear==='all' ?
        props.items :
        props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        })
    
    
    return(
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
            
        </Card>
    )
}


export default Expenses;