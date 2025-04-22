import { Component } from "react";

export default ({ todo, removeDone }) => {
    const doneLen = todo.filter(item => item.done).length;
    const unDoneLen = todo.length - doneLen;
    return <div id="todo-stats">
        <span className="todo-count">
            <span className="number">{unDoneLen}</span>
            <span className="word">项待完成</span>
        </span>
        {doneLen > 0 ? <span className="todo-clear">
            <a onClick={removeDone}>Clear <span>{doneLen}</span> 已完成事项</a>
        </span> : ""}
    </div>
}