import React, { useState } from 'react';
import styled, { css } from 'styled-components'
// import './Submit.css';

const DataInput = styled.input`
    width:1em;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance:textfield;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance:textfield;
    }
`

interface InutSquare_type  {
    defoultNumber:number;
    dataUnitID: number;
    setTempertureUnits:React.Dispatch<React.SetStateAction<number[]>>;
}

const InutSquare = (props: InutSquare_type): JSX.Element => {
    const [squareData, setSquareData] = useState<number>(props.defoultNumber);

    const getDataUnitId = (switchUnit: number = 0): string => {
        // more than 0 and less than 2
        switchUnit = Math.max(Math.min(props.dataUnitID + switchUnit, 2), 0);
        return 'DataUnit' + String(switchUnit);
    }

    const sliceMaxLength = (e:React.ChangeEvent<HTMLInputElement>) => {  
        e.target.value = e.target.value.slice(-1);
        setSquareData(Number(e.target.value));
        // document.getElementById(getDataUnitId(1))!.focus();
        console.log(squareData)
        setTimeout((() => {
            if (!isNaN(Number(e.target.value))) {
                document.getElementById(getDataUnitId(1))!.focus();
            }
        }) ,100)
        console.log( "hello" );
    }

    const KeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Backspace") {
            setTimeout((() => {
                document.getElementById(getDataUnitId(-1))!.focus();
            }) ,100)
            // document.getElementById("DataUnit"+String(props.dataUnitID - 1))!.focus();
        }
    }

    return (
        <DataInput
            type="number"
            id={getDataUnitId()}
            onChange={(e) => sliceMaxLength(e)}
            // onChange={(e) => setTemerture(Number(e.target.value))}
            placeholder={"0"}
            // placeholder={String(props.defoultNumber)}
            pattern="[0-9]{1}"
            onKeyDown={(e) => KeyPressHandler(e)}
        >
        </DataInput>
    );
}

export default InutSquare;