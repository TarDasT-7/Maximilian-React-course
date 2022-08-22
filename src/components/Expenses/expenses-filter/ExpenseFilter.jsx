import React , {useState} from "react";
import './ExpenseFilter.scss'

const ExpenseFilter = (props) => {

    const [selectYear , setSelectYear] = useState(props.selected)

    const selectHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <select onChange={selectHandler} value={props.selected}>
            <option value="all">all</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>

        </select>
    );
};

export default ExpenseFilter;