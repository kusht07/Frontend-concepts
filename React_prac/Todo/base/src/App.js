import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import todosData from "./todosData"
import './style.css'

export default class App extends Component {
    constructor() {
        super()
    
        this.state = {
             todos : todosData
            }
        }

    render() {
        const todoItems = this.state.todosData.map((item)=>{
            return <TodoItem key={item.id} items={item}/>
        })
        return (
            <div className="todo-list">
            {todoItems}
        </div>
        )
    }
}


