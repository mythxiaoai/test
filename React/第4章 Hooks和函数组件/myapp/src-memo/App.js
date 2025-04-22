import { useState } from "react";
import Todos from "./Todos";
import Stats from "./Stats";
import "./index.css";
export default () => {
    const [todo, setTodo] = useState({
        todo: [
            {
                id: 0,
                title: "今天晚上要看两本书",
                done: false
            }, {
                id: 1,
                title: "今天晚上上两颗星",
                done: true
            }
        ]
    });
    const addTodo = ({ keyCode, target }) => {
        if (keyCode === 13) {
            if (target.value.trim()) {
                todo.todo.push({
                    id: Date.now(),
                    title: target.value,
                    done: false
                });
                setTodo({
                    todo: todo.todo
                });
                target.value = "";
            }
        }
    };
    const removeTodo = (id) => {
        const newTodo = todo.todo;
        const index = newTodo.findIndex(item => item.id === id);
        newTodo.splice(index, 1);
        setTodo({
            todo: newTodo
        });
    };
    const changeDone = (id, done) => {
        todo.todo.forEach((item, index) => {
            if (item.id === id) {
                todo.todo[index] = {
                    ...item,
                    done
                }
            }
        })
        setTodo({
            todo: todo.todo
        });
    };
    const removeDone = () => {
        todo.todo.forEach(item => {
            if (item.done) {
                removeTodo(item.id);
            }
        })
    };
    const editTodo = (id, title) => {
        todo.todo.forEach((item, index) => {
            if (item.id === id) {
                todo.todo[index] = {
                    ...item,
                    title
                }
            }
        })
        setTodo({
            todo: todo.todo
        });
    }
    return <div id="todoapp">
        <div className="title">
            <h1>todo</h1>
        </div>
        <div id="create-todo">
            <input id="new-todo" placeholder="What needs to be done?" autoComplete="off" type="text" onKeyDown={addTodo} />
        </div>
        {
            todo.todo.length > 0 ? <>
                <Todos
                    todo={todo.todo}
                    removeTodo={removeTodo}
                    changeDone={changeDone}
                    editTodo={editTodo}
                />
                <Stats
                    todo={todo.todo}
                    removeDone={removeDone}
                />
            </> : ""
        }
    </div>
};
