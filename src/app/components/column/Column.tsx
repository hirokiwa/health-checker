import Square from '../square/Square';
import './Column.css';

interface type_column {
    week:number[]
}

const Column = (props:type_column) => {
    return(
        <div className="Column">
            {props.week.map((date) => <Square date = {date} />)}
        </div>
    )
}

export default Column