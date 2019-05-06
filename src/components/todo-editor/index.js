import React, { useState } from 'react'
import TodoList from '../todo-list'
import TodoForm from '../todo-form'
import uuid from 'uuid/v4'

const initialTodos = [
  {
      id: uuid(),
      title: 'research react hooks'
  },
  {
      id: uuid(),
      title: 'one todo'
  },
  {
      id: uuid(),
      title: 'another one todo'
  }
]

const TodoEditor = _ => {
    const [todos, setTodos] = useState(initialTodos)

    const submitTodo = todo => {
        const updatedTodos = todos.concat({ ...todo, id: uuid() })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h2>Todo Editor</h2>
            <TodoForm submit={submitTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoEditor