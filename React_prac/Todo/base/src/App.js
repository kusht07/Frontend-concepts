import React from "react"
import TodoItem from './components/TodoItem'
import todosData from "./todosData"
import './style.css'


function App() {
    const todoArr = todosData.map((todo)=>{
        return <TodoItem key={todo.id} items={todo}/>
    })
    return (
        <div className="todo-list">
            {todoArr}
        </div>
    )
}

export default App