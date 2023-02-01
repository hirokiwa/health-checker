import React, { useState } from 'react';
import Header from '../../components/header/Header';
import styled, { css } from 'styled-components'
import InputSquare from './InputSquare';
// import './Submit.css';

const DataInput = styled.input`
    width:4em;
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

const TakeTemperture = ():JSX.Element => {
    const today:Date = new Date();
    const [temperture, setTemperture] = useState<number>(0);
    // const [tempertureUnits, setTempertureUnits] = useState<number[]>([3,6,0]);

    const DisplayTemperture = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let changeValue: number = Number(e.target.value);
        setTemperture(Number(e.target.value)/10)
    }

    // for usability======================================
    // window.onload = () => {
    //     document.getElementById("DataUnit0")!.focus();
    // }
    // ===================================================

    // const [squareData, setSquareData] = useState<number>(0);

    const sliceMaxLength = (e:React.ChangeEvent<HTMLInputElement>) => {  
        e.target.value = e.target.value.slice(0, 4);
        setTemperture(Number(e.target.value));
    }

    const KeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            console.log(temperture);
        }
    }
    
    return(
        <div className="Submit">
            {/* <div className='display_temperture'>{temperture.toFixed(1)}</div> */}
            <div>本日の体温</div>

            <DataInput
                type="number"
                id={"DataUnit"}
                onChange={(e) => sliceMaxLength(e)}
                step="0.1"
                // onChange={(e) => setTemerture(Number(e.target.value))}
                placeholder={"00.0"}
                // placeholder={String(props.defoultNumber)}
                pattern="^([1-9]\d*|0)(\.\d+)?$"
                onKeyDown={(e) => KeyPressHandler(e)}
            >
            </DataInput>

            {/* for usability====================================== */}
            {/* <InputSquare
                defoultNumber={tempertureUnits[0]}
                setTempertureUnits={setTempertureUnits}
                dataUnitID={0}
            />
            <InputSquare
                defoultNumber={tempertureUnits[1]}
                setTempertureUnits={setTempertureUnits}
                dataUnitID={1}
            />
            <span>.</span>
            <InputSquare
                defoultNumber={tempertureUnits[2]}
                setTempertureUnits={setTempertureUnits}
                dataUnitID={2}
            /> */}
            {/* =================================================== */}
            <span>℃</span>
            <br></br>
            <button>記録</button>
        </div>
    )
}

export default TakeTemperture