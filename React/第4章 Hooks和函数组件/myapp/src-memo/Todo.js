import { memo, useEffect, useRef, useState } from "react";
function Todo({ todo, changeDone, removeTodo, editTodo }){
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
/*
    React.memo(Component, [areEqual(prevProps, nextProps)]);
    - 用来通知内部组件是否需要更新
    - 高阶组件：本质是一个高阶函数，高阶组件，接受一个组件（A），并返回一个新的组件（B）
    - 当组件B被调用时，组件B的内部会调用组件A, 调用组件B的父级更新时，组件B会去调用 函数 C，函数C 的返回值为 true 则不更新 A，如果为 false 则更新 A
*/
const NewTodo = memo(Todo,(prevProps,nextProps)=>{
    return prevProps.todo === nextProps.todo;
});

export default NewTodo;


