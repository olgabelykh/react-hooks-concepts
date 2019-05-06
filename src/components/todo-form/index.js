import React, { useState } from 'react'

const TodoForm = props => {
    const [title, setTitle] = useState('')

    const titleChangeHandler = event => setTitle(event.target.value)

    const submitHandler = event => {
        const {  submit } = props

        submit({ title })
        
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