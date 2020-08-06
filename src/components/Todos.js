import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} todo = {todo} mark = {this.props.mark} del = {this.props.del} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  mark: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired
}

export default Todos;