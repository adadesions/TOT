import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import MyNav from './components/MyNav'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <MyNav />
          </div>
        </div>

        <Route exact path="/" component={HomePage} />
        {/* <Route path="/info" component={Information} /> */}

      </div>
    </Router>
  );

}

export default App;