import React, { useContext } from 'react'

import TodosContext from '../../context/todos' 

const TodoItem = props => {
    const { completeTodo } = useContext(TodosContext)
    const { todo } = props

    const clickTodoHandler = () => completeTodo(todo.id)
    
    return(
        <div onClick={clickTodoHandler}>
            {todo.title}
            {todo.complete ? '+' : null}
        </div>
    )
}

export default TodoItem