import React from "react";

interface valuesType {
    roomId: string,
    username: string
};



export default function useForm(initValues:valuesType) {
    const [values,setValues] = React.useState(initValues);

    const onChangeHandler:(e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    return [values, onChangeHandler] as const;

}