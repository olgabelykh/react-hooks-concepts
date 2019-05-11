import React, { useState, useContext } from 'react'

import TodoContext from '../../context/todos'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const { addTodo } = useContext(TodoContext)

    const titleChangeHandler = event => setTitle(event.target.value)

    const submitHandler = event => {
        addTodo({ title })
        
        setTitle('')
        event.preventDefault()
    } 

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={titleChangeHandler} />
            <input
                type="submit"
                value="submit" />
        </form>
    )
}

export default TodoForm