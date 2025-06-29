import React, {useState} from "react";
import {useTodoDispatch} from "../App";

export default function Editor() {
    const [text, setText] = useState('');
    const dispatch = useTodoDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText('');
    }

    return (
        <div>
            <input value={text} onChange={onChangeInput}/>
            <button onClick={onClickButton}>Add</button>
        </div>
    )
}