import './App.css';
import React, {useRef, useState} from "react";
import Editor from "./components/Editor";

interface Todo {
    id: number;
    content: string;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const idRef = useRef(0);

    const onClickAdd = (text: string) => {
        setTodos([...todos, {id: idRef.current++, content: text}]);
    }

    return (
        <div className="App">
            <h1>TODO</h1>
            <Editor onClickAdd={onClickAdd}></Editor>
        </div>
    );
}

export default App;
