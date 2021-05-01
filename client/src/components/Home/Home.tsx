import React from "react";
import "./Home.scss";
import Input from "./Input";
import useForm from "./useForm";

interface valuesType {
    roomId: string,
    username: string
};

const initValues:valuesType = {
    roomId: "",
    username: ""
};

export default function Home() {

    const [values, onChangeHandler] = useForm(initValues);

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div id="__home__component">
            <form onSubmit={onSubmitHandler}>
                <Input
                label="Room ID"
                name="roomId"
                onChangeHandler={onChangeHandler}
                value={values.roomId}
                />

                <Input
                label="Username"
                name="username"
                onChangeHandler={onChangeHandler}
                value={values.username}
                />

                <button 
                type="submit"
                className="submit__button"
                >Join</button>
            </form>
        </div>

    )
}