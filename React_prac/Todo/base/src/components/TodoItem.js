import React from "react"
import '../style.css'
import '../todosData'

function TodoItem(props){
    return (
        <div className="todo-item">
        <input type="checkbox" checked={props.items.completed}/>
        <p>{props.items.text}</p>
    </div>
    )
}

export default TodoItem