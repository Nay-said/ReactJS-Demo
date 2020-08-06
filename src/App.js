import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import Todos from './components/Todos';
import Add from './components/Add';
import About from './pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
      .then(res => this.setState({ todos: res.data }));
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
      <Router>
        <div className="App" style={app}>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Add add={this.add} />
              <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
                <Todos todos = { this.state.todos } mark={this.mark} del={this.del} />
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const app = {
  width: '50%',
  margin: '0 auto',
  marginTop: '20px'
}

export default App;