import React, { Component } from 'react';
import Todos from '../components/TodoApp/Todos';
import Add from '../components/TodoApp/Add';
import axios from 'axios';

class TodoApp extends Component {
   state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
      .then(res => {
        this.setState({ todos: res.data });
        console.log(res.data)
      } 
    );
  }

  mark = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  del = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  add = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false})
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }
  
  render() {
    return (
        <div>
          <Add add={this.add} />
          <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            <Todos todos={this.state.todos} mark={this.mark} del={this.del} />
          </div>
        </div>
    )
  }
}

export default TodoApp;