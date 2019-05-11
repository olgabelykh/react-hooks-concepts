import React, { useReducer } from 'react'
import TodoList from '../todo-list'
import TodoForm from '../todo-form'
import uuid from 'uuid/v4'

import TodoContext from '../../context/todos'

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

const todosReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_TODO':
            return state.concat({ ...payload.todo, id: uuid() });
        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === payload.id ? { ...todo, complete: !todo.complete } : todo)
        default:
            return state
    }
}

const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: { todo }
    }
}

const completeTodo = id => {
    return {
        type: 'COMPLETE_TODO',
        payload: { id }
    }
}

const TodoEditor = _ => {
    const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos)
    
    const dispatchAddTodo = todo => dispatchTodos(addTodo(todo))

    const dispatchCompleteTodo = id => dispatchTodos(completeTodo(id))

    return (
        <TodoContext.Provider value={{ addTodo: dispatchAddTodo, completeTodo: dispatchCompleteTodo }} >
        <div>
            <h2>Todo Editor</h2>
            <TodoForm />
            <TodoList todos={todos} />
        </div>
        </TodoContext.Provider>
    )
}

export default TodoEditor