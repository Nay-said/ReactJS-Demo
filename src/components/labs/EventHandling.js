import React from 'react';
import { Button } from 'react-bootstrap';

function Event() {
  function clickHandler() {
    alert('Button Clicked!')
  }

  return (
    <div style={ labWrap }>
    <h3>Lab</h3> <hr/>
    <Button onClick={clickHandler} variant="primary" className="mt-3">Click Here</Button>{' '}
  </div>
  )
}

const labWrap = {
  width: '80%',
  height: '300px',
  margin: '0 auto',
  marginTop: '30px',
  textAlign: 'center'
}

export default Event;