import React, { useState } from 'react'
import TodoList from '../todo-list'

const initialTodos = [
  {
      id: 'todo1',
      title: 'reasearch react hooks'
  },
  {
      id: 'todo2',
      title: 'one todo'
  },
  {
      id: 'todo3',
      title: 'another one todo'
  }
]

const TodoEditor = _ => {
    const [todos, setTodos] = useState(initialTodos)

    return (
        <div>
            <h2>Todo Editor</h2>
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoEditor