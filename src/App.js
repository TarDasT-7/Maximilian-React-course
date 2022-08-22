import React , {useState} from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id:'e1' , 
        title : 'whater pump' ,
        amount : 180.0 ,
        date : new Date(2022, 4, 19),
    },
    {
        id:'e2' , 
        title : 'mask' ,
        amount : 45.0 ,
        date : new Date(2022, 2, 10),
    },
    {
        id:'e3' , 
        title : 'cack' ,
        amount : 189.500 ,
        date : new Date(2022, 2, 5),
    },
    {
        id:'e4' , 
        title : 'alcohol' ,
        amount : 35.0 ,
        date : new Date(2022, 1, 24),
    },
    
];

const App = ()=>{

    const [expenses , setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        // setExpenses([expense , ...expenses]);
        setExpenses(prevExpenses => {
            return [expense , ...prevExpenses];
        });
        console.table(expenses);

    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
