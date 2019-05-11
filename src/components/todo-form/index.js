import React, { useState, useContext, useRef } from 'react'

import TodoContext from '../../context/todos'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const { addTodo } = useContext(TodoContext)
    const inputTitleRef = useRef()

    const titleChangeHandler = event => setTitle(event.target.value)

    const submitHandler = event => {
        event.preventDefault()

        addTodo({ title })
        inputTitleRef.current.focus()
        setTitle('')
    } 

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="title"
                ref={inputTitleRef}
                value={title}
                onChange={titleChangeHandler} />
            <input
                type="submit"
                value="submit" />
        </form>
    )
}

export default TodoForm