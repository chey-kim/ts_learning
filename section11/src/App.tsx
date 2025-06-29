import './App.css';
import React, {useReducer, useRef} from "react";
import Editor from "./components/Editor";
import {Todo} from "./types";
import TodoItem from "./components/TodoItem";
import _ from "lodash";

type Action = {
    type: "CREATE";
    data: {
        id: number,
        content: string
    };
} | {
    type: "DELETE",
    id: number
} | {
    type: "UPDATE",
    data: {
        id: number,
        content: string
    }
}

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "DELETE":
            return state.filter((it) => it.id !== action.id);
    }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null)
export const TodoDispatchContext = React.createContext<{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
    const dispatch = React.useContext(TodoDispatchContext);
    if (!dispatch) {
        throw new Error('todo dispatch context');
    }
    return dispatch;
}


function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                content: text
            },
        });
    };


    const onClickDelete = (id: number) => {
        dispatch({
            type: "DELETE",
            id: id,
        });
    }

    return (
        <div className="App">
            <h1>TODO</h1>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
                    <Editor/>
                    <div>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo}></TodoItem>
                        ))}
                    </div>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
