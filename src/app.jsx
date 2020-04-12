import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
        <Route exact path="/">
          <Home
            navbarState={navbarOpen}
            handleNavbar={setNavbarOpen}
          />
        </Route>
        <Route path="/book">
          <Booking />
        </Route>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
