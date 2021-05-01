import React from "react";

interface Props{
    name: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    label: string
}

export default function Input({name, onChangeHandler, value, label}:Props) {
    return (
        <div className="form__group">
            <label htmlFor={name}>{label}</label>
            <input
            name={name}
            onChange={onChangeHandler}
            value={value}
            className="form__control"
            />
        </div>
        
    )
}