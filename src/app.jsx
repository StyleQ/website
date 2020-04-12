import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarOpen: false };
    this.handleNavbar = this.handleNavbar.bind(this);
  }

  handleNavbar() {
    this.setState(state => ({
      navbarOpen: !state.navbarOpen
    }));
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Route exact path="/">
            <Home
              navbarState={this.state.navbarOpen}
              handleNavbar={this.handleNavbar}
            />
          </Route>
          <Route path="/book">
            <Booking />
          </Route>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
