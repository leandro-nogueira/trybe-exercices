import React from 'react';
import './App.css';
import LoginForms from './components/LoginForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>SUPER REVISÃO</h1>        
        <LoginForms />
      </div>
    );
  }  
}

export default App;
