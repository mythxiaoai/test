import { useEffect, useRef, useState } from "react";

export default ({ todo, changeDone, removeTodo, editTodo }) => {
    const [edit, setEdit] = useState(false);
    const {id, title, done} = todo;
    const editInput = useRef();
    const [editVal, setEditVal] = useState(title);
    const checkDone = ({ target }) => {
        changeDone(id, target.checked);
    };
    const toEdit = () => {
        setEdit(true);
    };
    const remove = () => {
        removeTodo(id);
    };
    const cancelEdit = () => {
        if (editVal.trim()) {
            editTodo(id, editVal);
        } else {
            setEditVal(title);
        }
        setEdit(false);
    };
    const editTitle = ({ target }) => {
        setEditVal(target.value);
    };
    useEffect(()=>{
        if(edit){
            editInput.current.focus();
        }
    },[edit]);
    console.log(id,"render");
    return <li className={edit ? "editing" : ""}>
        <div className={`todo ${done ? "done" : ""}`}>
            <div className="display">
                <input
                    className="check"
                    type="checkbox"
                    checked={done}
                    onChange={checkDone}
                />
                <div
                    className="todo-content"
                    onDoubleClick={toEdit}
                >{title}</div>
                <span className="todo-destroy" onClick={remove}></span>
            </div>
            <div className="edit">
                <input
                    className="todo-input"
                    type="text"
                    ref={editInput}
                    onBlur={cancelEdit}
                    value={editVal}
                    onChange={editTitle}
                />
            </div>
        </div>
    </li>
}


