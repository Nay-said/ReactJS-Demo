import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import About from './pages/About';
import TodoApp from './pages/TodoApp';
import Lab from './pages/Lab';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={app}>
          <Header />
          <Route path="/TodoApp" component={TodoApp} />
          <Route path="/About" component={About} />
          <Route path="/Lab" component={Lab} />
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