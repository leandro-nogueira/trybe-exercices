import React from 'react';
import './App.css';
import Button from './components/Button';
import Forms from './components/Form';
import Inputs from './components/Inputs';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })    
  }
  
  confirmSend = () => {
    console.log('to aqui no btn')
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <h1>Formulário de dúvidas Revisão</h1>
        
        <Forms
          email={ email }
          password={ password }
          handleChange={ this.handleChange }
          onClickBtn={ this.confirmSend }
        />

      </div>
    );
  }  
}

export default App;
