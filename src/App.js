import React from 'react';
import './App.css';
import Navbar from './components/nav.jsx';
import Blog_body from './components/Blog_body';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contest_page from './components/Contest_page';
import Mainpage from './components/Mainpage';
import Main_Swiper from './components/Main_swiper';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/blogs">
            <Navbar color="#242424"/>
            <br />
            <br />
            <br />
            <Blog_body />
          </Route>

          <Route path="/contest">
            <Navbar color="#242424"/>
            <br />
            <br />
            <br />
            <Contest_page />
          </Route>

          <Route path="/placement">
            <Navbar color="#242424"/>
            <br />
            <br />
            <br />
            <h1>This is placement page</h1>
          </Route>

          <Route path="/info">
            <Navbar color="#242424"/>
            <Main_Swiper />
          </Route>

          <Route path="/">
            <Navbar color="#efefef"/>
            <Mainpage />
          </Route>

        </Switch>

      </Router>
    </div>


  );
}

export default App;
