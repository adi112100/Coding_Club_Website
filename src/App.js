import React from 'react';
import './App.css';
import Navbar from './components/nav.jsx';
import Blog_body from './components/Blog_body';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contest_page from './components/Contest_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/blogs">
            <Blog_body />
          </Route>

          <Route path="/contest">
            <Contest_page />
          </Route>

          <Route path="/placement">
            <h1>This is placement page</h1>
          </Route>

          <Route path="/">
            <h1>Frontpage</h1>
          </Route>

        </Switch>

      </Router>
    </div>


  );
}

export default App;
