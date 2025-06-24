import {Todo} from "../types";

interface Props extends Todo {
    onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
    const onClickDelete = () => {
        props.onClickDelete(props.id);
    }

    return (
        <div>
            {props.id}번 : {props.content}
            <button onClick={onClickDelete}>Delete</button>
        </div>
    )
}