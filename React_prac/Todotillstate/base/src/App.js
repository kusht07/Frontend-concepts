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
        this.handleChange = this.handleChange.bind(this)
        }
    
        handleChange(id) {
            // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
            // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
            this.setState((prevState) => {
                const updatedTodos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo                                         // return array of todo which has flipped todo where id is user clicked id on prop
                })
                return {
                    todos : updatedTodos
                }
            })
        }    
        
    render() {
        const todoItems = this.state.todos.map((item)=>{
            return <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
        })
        return (
            <div className="todo-list">
            {todoItems}
        </div>
        )
    }
}