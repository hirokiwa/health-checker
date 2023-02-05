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

const SubmitButton = styled.button`
    width:10rem;
    height:2rem;
    border-radius:0.5rem;
    margin 2rem;
`

const TakeTemperture = ():JSX.Element => {
    const [temperture, setTemperture] = useState<number>(0);
    const [displayTempertureInput, setDisplayTempertureInput] = useState<string>("");
    
    // const [tempertureUnits, setTempertureUnits] = useState<number[]>([3,6,0]);

    // for desktop======================================
    window.onload = () => {
        document.getElementById("DataUnit")!.focus();
    }
    // ===================================================

    const addPeriod = (inputedData: string): boolean => (
        inputedData.length === 2 && displayTempertureInput.length <= inputedData.length
    );
    
    const cutPeriod = (inputedData: string): boolean => (
        inputedData.length === 2 && displayTempertureInput.length > inputedData.length
    );

    const sliceMaxLength = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputedData = e.target.value.slice(0, (cutPeriod(e.target.value)? 1 : 4));
            
        setDisplayTempertureInput(`${inputedData}${addPeriod(inputedData) ? '.' : ''}`);
        setTemperture(Number(inputedData));
    }

    const submitTemperture = () => {
        console.log(temperture);
    }

    const KeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            submitTemperture();
        }
        // e.code === "Enter" ? console.log(temperture) : undefined;
    }
    
    return(
        <div className="Submit">
            {/* <div className='display_temperture'>{temperture.toFixed(1)}</div> */}
            <h2>本日の体温</h2>
            <DataInput
                // type="number"
                id={"DataUnit"}
                value={displayTempertureInput}
                onChange={(e) => sliceMaxLength(e)}
                // step="0.1"
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
            <SubmitButton onClick={()=>{submitTemperture()}}>記録</SubmitButton>
        </div>
    )
}

export default TakeTemperture