import React, { useReducer } from 'react'
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

    const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos)

    const addTodo = todo => {
        return {
            type: 'ADD_TODO',
            payload: { todo }
        }
    }

    const dispatchAddTodo = todo => dispatchTodos(addTodo(todo))

    const completeTodo = id => {
        return {
            type: 'COMPLETE_TODO',
            payload: { id }
        }
    }

    const dispatchCompleteTodo = id => dispatchTodos(completeTodo(id))

    return (
        <div>
            <h2>Todo Editor</h2>
            <TodoForm addTodo={dispatchAddTodo} />
            <TodoList todos={todos} completeTodo={dispatchCompleteTodo} />
        </div>
    )
}

export default TodoEditor