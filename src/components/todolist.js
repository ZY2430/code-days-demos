import React from 'react';
import TodoItem from './todoItem';

export class todolist extends React.Component {
    render() {
        return  this.props.todos.map((todo) => (<TodoItem key ={todo.id}  todo = {todo} />))

    }
}

export default todolist
