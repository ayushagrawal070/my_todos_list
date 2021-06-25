import React from 'react'
import { TodoItem } from "./TodoItem"


export const Todos = (props) => {
    return (
        <div className="container my-3">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? <h6>Hurray! You have no tasks to do..</h6> : props.todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                )
            })}
        </div>
    )
}
