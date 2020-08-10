import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ?  'line-through' : 'none'
    }
  }

  mark = (e) => {
    console.log(this.props);
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" style={{marginRight: '20px'}} onChange={this.props.mark.bind(this, id)} />
          <span>{ title }</span>
          <Button onClick={this.props.del.bind(this, id)} variant="danger" style={btnStyle}>X</Button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  mark: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired
}

const btnStyle = {
  border: 'none',
  padding: '5px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
