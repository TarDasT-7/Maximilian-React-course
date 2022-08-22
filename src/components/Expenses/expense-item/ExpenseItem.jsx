import React , {useState} from "react";
import './ExpenseItem.scss'

import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../../UI/card/Card";

const ExpenseItem = (props) => {

    const [title , setTitle] = useState(props.title)
    
    const clickHandler = ()=>{

        if(title.split('-').length > 1)
        {
            setTitle(title + ' *');
        }else
        {
            setTitle(title + ' - has updated');
        }
    };

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler} > change title </button>
            </Card>
        </li>
    );
}

export default ExpenseItem;