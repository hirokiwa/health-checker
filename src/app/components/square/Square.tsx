import React from 'react';
import './Square.css';

type type_Square = {
    date:number;
}

const Square = (props:type_Square) => {
    return(
        <div className="Square">
            {props.date}日
        </div>
    )
}

export default Square