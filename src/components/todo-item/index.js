import React from 'react'

const TodoItem = props => {
    const  { todo, completeTodo } = props
    const clickTodoHandler = () => completeTodo(todo.id)
    return(
        <div onClick={clickTodoHandler}>
            {todo.title}
            {todo.complete ? '+' : null}
        </div>
    )
}

export default TodoItem