import React from 'react';
import LandingPage from './components/LandingPage.js';
import LoginForm from './components/LoginForm.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/login" exact component={LoginForm}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
