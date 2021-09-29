import React from "react";
import Inputs from "./Inputs";
import Button from "./Button";

class Forms extends React.Component {
  
  render() {
    const { email, password, handleChange, onClickBtn } = this.props;
    return (
      <form>
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
          typeBtn="button"
          labelBtn="CONFIRMAR"
          onClickBtn={ onClickBtn }
        />

      </form>


    )
  }
}

export default Forms;
