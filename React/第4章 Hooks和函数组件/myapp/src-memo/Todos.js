import Todo from "./Todo";
export default ({todo,...props})=>{
    return <ul id="todo-list">{
        todo.map(item=><Todo key={item.id} {...props} todo={item} />)
    }</ul>
};