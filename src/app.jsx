import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book">
          <Booking />
        </Route> 
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </ErrorBoundary>
  );
}


export default App;
