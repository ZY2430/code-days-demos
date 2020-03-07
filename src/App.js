import React, { Component } from 'react';
import Todolist from './components/todolist';

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "task 1",
        completed: false
      },
      {
        id: 2,
        title: "task 2",
        completed: false
      },
      {
        id: 3,
        title: "task 3",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div>
        <Todolist todos = {this.state.todos} />
      </div>
    )
  }
}

export default App
