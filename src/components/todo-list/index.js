import React from 'react'

import TodoItem from '../todo-item'

const TodoList = props => {
    const { todos, completeTodo } = props
    return (
        <div>
            <h3 onCl>Todo List</h3>
            {todos.map(todo => <TodoItem  key={todo.id} todo={todo} completeTodo={completeTodo}/>)}
        </div>
    )
}

export default TodoList