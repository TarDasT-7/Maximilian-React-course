import React , {useState} from "react"
import './ExpenseForm.scss'

const ExpenseForm = (props) => {
    
    const [enterdTitle , setEnterdTitle] = useState('');
    const [enterdAmount , setEnterdAmount] = useState('');
    const [enterdDate , setEnterdDate] = useState('');

    // const [userInformation , setUserInformation] = setState({
    //     enterdTitle:'',
    //     enterdAmount:'',
    //     enterdDate:'',
    // });
    
    const inputHandler = (event) =>{

        switch (event.target.name) {
            case 'title':
                setEnterdTitle(event.target.value);
                // setUserInformation({
                //     ...userInformation,
                //     enterdTitle :event.target.value
                // })

                break;
            case 'amount':
                setEnterdAmount(event.target.value);
                // setUserInformation({
                //     ...userInformation,
                //     enterdAmount :event.target.value
                // })

                break;
            case 'date':
                setEnterdDate(event.target.value);
                // setUserInformation({
                //     ...userInformation,
                //     enterdDate :event.target.value
                // })

                break;
        }

    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title:enterdTitle,
            amount:enterdAmount,
            date: new Date(enterdDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" value={enterdTitle} onChange={inputHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step=".01" value={enterdAmount} name="amount" onChange={inputHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2024-12-31" value={enterdDate} name="date" onChange={inputHandler}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;