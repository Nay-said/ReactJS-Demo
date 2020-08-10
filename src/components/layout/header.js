import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>React JS Demo</h1>
     <div style={{ marginTop: '15px', marginBottom: '15px' }}>
        <Link to="/" style={link}>Home</Link>&nbsp; | &nbsp; 
        <Link to="/TodoApp" style={link}>Todo App</Link>&nbsp; | &nbsp; 
        <Link to="/Lab" style={link}>Lab</Link>&nbsp; | &nbsp;
        <Link to="/about" style={link}>About</Link>
     </div>
    </header>
  )
}

const headerStyle = {
  background: '#525252',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const link = {
  color: 'white'
}

export default Header;