import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header'
import Todos from './components/Todos';

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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App" style={app}>
        <Header />
        <Todos todos = { this.state.todos } mark={this.mark} del={this.del} />
      </div>
    );
  }
}

const app = {
  width: '50%',
  margin: '0 auto',
  marginTop: '20px'
}

export default App;