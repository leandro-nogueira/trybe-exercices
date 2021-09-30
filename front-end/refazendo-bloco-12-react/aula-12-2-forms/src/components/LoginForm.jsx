import React from 'react';
import './LoginForm.css';
import Inputs from './Inputs';
import Button from './Button';

class LoginForms extends React.Component {
  constructor () {
    super();

    this.state = {
      email: '',
      password: '',
      showEmail: false,
      isRequired: true,
      senha: '2903',
      validPass: false,
      invalidPass: false,

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
    const { senha, password } = this.state; 
    e.preventDefault();
    if(password === senha)
    this.setState(()=>({
      showEmail: true,
      validPass: true
    }))
    if(password !== senha)
      this.setState(()=>({
      invalidPass: true,
    }))
  
  }
  

  render() {
    // const { email, password, handleChange, onSubmitForm, isRequired } = this.props;
    const { email, password, showEmail, isRequired, validPass } = this.state;
    const enable = (showEmail && validPass);
    return (
      <form className="Border" onSubmit={ this.onSubmitForm }>
        <h2 className="ColorText" >Tela de Login</h2>
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
          disable={enable}

          
          
        />

        <br />

        { (showEmail && validPass) ? `${email} seja bemvido` : ''}

      </form>


    )
  }
}

export default LoginForms;
