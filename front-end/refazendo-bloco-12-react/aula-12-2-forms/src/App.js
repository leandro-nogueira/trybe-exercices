import React from 'react';
import './App.css';
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
    console.log('to aqui')
  } 

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <h1>Formulário de dúvidas Revisão</h1>
        
        <Inputs
          inputLabel="E-mail:"
          type="email"
          name="email"
          handleChange={ this.handleChange }
          value={ email }
        />

        <br />

        <Inputs
          inputLabel="Password:"
          type="password"
          name="password"
          handleChange={ this.handleChange }
          value ={ password }
        />

        <br />
        <br />
        <br />

        <button type="button">Confirmar</button>

      </div>
    );
  }  
}

export default App;
