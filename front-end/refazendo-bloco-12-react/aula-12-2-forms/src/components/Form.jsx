import React from 'react';
import Inputs from './Inputs';
import Button from './Button';

class Forms extends React.Component {
  
  onSubmitForm = () => {
    console.log("teste")
  }

  render() {
    const { email, password, handleChange} = this.props;
    return (
      <form onSubmit={ this.onSubmitForm }>
        <h2>Tela de Login</h2>
        <Inputs
          inputLabel="E-mail:"
          type="email"
          name="email"
          handleChange={ handleChange }
          value={ email }
        />

        <br />

        <Inputs
          inputLabel="Senha:"
          type="password"
          name="password"
          handleChange={ handleChange }
          value ={ password }
        />

        <br />
        <br />
        <br />

        <Button
          labelBtn="ENTRAR"
        />

      </form>


    )
  }
}

export default Forms;
