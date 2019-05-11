import React, { useState } from 'react'
import TodoList from '../todo-list'
import TodoForm from '../todo-form'
import uuid from 'uuid/v4'

const initialTodos = [
  {
      id: uuid(),
      title: 'research react hooks',
      complete: false
  },
  {
      id: uuid(),
      title: 'one todo',
      complete: false
  },
  {
      id: uuid(),
      title: 'another one todo',
      complete: true
  }
]

const TodoEditor = _ => {
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = todo => {
        const updatedTodos = todos.concat({ ...todo, id: uuid() })
        setTodos(updatedTodos)
    }

    const completeTodo = id => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo)
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h2>Todo Editor</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default TodoEditor