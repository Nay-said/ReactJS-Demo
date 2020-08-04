import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do something',
        completed: false
      },
      {
        id: 2,
        title: 'do something else',
        completed: false
      },
      {
        id: 3,
        title: 'do some other thing',
        completed: false
      }
    ]
  }

  mark = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
    console.log('From app.js', id)
  }

  del = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <h1>React Js Demo App</h1>
        <Todos todos = { this.state.todos } mark={this.mark} del={this.del} />
      </div>
    );
  }
}

export default App;