import React from 'react';
import Inputs from './Inputs';
import Button from './Button';

class Forms extends React.Component {
  constructor () {
    super();

    this.state = {
      email: '',
      password: '',
      showEmail: false,
      isRequired: true,

    }
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      showEmail: false,
    })    
  }
  
  onSubmitForm = (e) => { 
    e.preventDefault();
    this.setState({
      showEmail: true,
    })
  }
  

  render() {
    // const { email, password, handleChange, onSubmitForm, isRequired } = this.props;
    const { email, password, showEmail, isRequired } = this.state;

    return (
      <form onSubmit={ this.onSubmitForm }>
        <h2>Tela de Login</h2>
        <Inputs
          inputLabel="E-mail:"
          type="email"
          name="email"
          handleChange={ this.handleChange }
          value={ email }
        />

        <br />

        <Inputs
          inputLabel="Senha:"
          type="password"
          name="password"
          handleChange={ this.handleChange }
          value={ password }
          isRequired={ isRequired }
        />

        <br />
        <br />
        <br />

        <Button
          labelBtn="ENTRAR"
        />
        
        <br />

        { showEmail ? email : ''}

      </form>


    )
  }
}

export default Forms;
