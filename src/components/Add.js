import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
       <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Add a to do item" style={{flex: '10', pading: '10px'}} />
       <input type="submit" value="+ Add" className="button" style={{flex: '1', background: '#555', color: 'white'}} />
     </form>
    )
  }
}

Add.propTypes = {
  add: PropTypes.func.isRequired
}

export default Add