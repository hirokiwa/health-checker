import React from 'react';
import Repeat from '../../function/Repeat';
import Square from '../square/Square';
import './Column.css';

interface type_column {
    week:number[]
}

const Column = (props:type_column) => {
    return(
        <div className="Column">
            {/* <Repeat numTimes={7} display_flex={true}>
                {(index:number) => <div key={index} className = "square_outer">
                    <Square times = {index} />
                </div>
                }
            </Repeat> */}
            {props.week.map((date, index) => <Square date = {date} />)}
        </div>
    )
}

export default Column