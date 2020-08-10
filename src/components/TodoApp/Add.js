import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export class Add extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});
  onSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
     <form onSubmit={this.onSubmit} style={{ display: 'flex', height: '36px', margin: '20px auto 30px auto' }}>
       <Form.Control type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Add a to do item" style={{flex: '10', pading: '10px'}} />
       <Button variant="info" type="submit" className="ml-2" style={{flex: '1'}}>+ Add </Button>
     </form>
    )
  }
}

Add.propTypes = {
  add: PropTypes.func.isRequired
}

export default Add