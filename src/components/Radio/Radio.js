import React from 'react';
import './Radio.css';

export default function(props){
    return (
        <>
            <label htmlFor={props.id} className={props.checked ? "radio-label radio-label-active" : "radio-label"}>{props.title}</label>
            <input type="radio" name={props.name} id={props.id} onChange={() => props.onChangeHandler(props.id)} hidden />
        </>
    );
}