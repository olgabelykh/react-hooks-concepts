import React from 'react'

import TodoItem from '../todo-item'

const TodoList = props => {
    const { todos } = props
    return (
        <div>
            <h3>Todo List</h3>
            {todos.map(todo => <TodoItem  key={todo.id} todo={todo} />)}
        </div>
    )
}

export default TodoList