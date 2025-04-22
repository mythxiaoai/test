import { useState } from "react";
import Todos from "./Todos";
import Stats from "./Stats";
import "./index.css";

export default () => {
    const [todo, setTodo] = useState([
        {
            id: 0,
            title: "今天晚上要看两本书",
            done: false
        }, {
            id: 1,
            title: "今天晚上上两颗星",
            done: true
        }
    ]);
    const addTodo = ({ keyCode, target }) => {
        if (keyCode === 13) {
            if (target.value.trim()) {
                setTodo([
                    ...todo,
                    {
                        id: Date.now(),
                        title: target.value,
                        done: false
                    }
                ]);
                target.value = "";
            }
        }
    };
    const removeTodo = (id) => {
        setTodo(todo.filter(item => item.id !== id));
    };
    const changeDone = (id, done) => {
        setTodo(todo.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    done
                }
            }
            return item;
        })
        )
    };
    const removeDone = () => {
        setTodo(todo.filter(item => (!item.done)));
    };
    const editTodo = (id, title) => {
        setTodo(todo.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title
                }
            }
            return item;
        })
        );
    }
    return <div id="todoapp">
        <div className="title">
            <h1>todo</h1>
        </div>
        <div id="create-todo">
            <input id="new-todo" placeholder="What needs to be done?" autoComplete="off" type="text" onKeyDown={addTodo} />
        </div>
        {
            todo.length > 0 ? <>
                <Todos
                    todo={todo}
                    removeTodo={removeTodo}
                    changeDone={changeDone}
                    editTodo={editTodo}
                />
                <Stats
                    todo={todo}
                    removeDone={removeDone}
                />
            </> : ""
        }

    </div>
};
