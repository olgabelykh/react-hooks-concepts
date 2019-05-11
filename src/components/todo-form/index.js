import React, { useState, useContext, useRef, useEffect } from 'react'

import TodoContext from '../../context/todos'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [isInvalid, setInvalidStatus] = useState(true)

    const { addTodo } = useContext(TodoContext)
    const inputTitleRef = useRef()

    useEffect(() => setInvalidStatus(!title), [title])

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
                placeholder="todo title"
                ref={inputTitleRef}
                value={title}
                onChange={titleChangeHandler} />
            <input
                type="submit"
                value="submit"
                disabled={isInvalid} />
        </form>
    )
}

export default TodoForm