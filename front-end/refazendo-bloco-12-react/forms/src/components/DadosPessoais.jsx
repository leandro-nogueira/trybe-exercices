import React from 'react';
import PropTypes from 'prop-types';

class DadosPessoais extends React.Component {
  render() {
    const { handleChange, email, nome, idade, handleError } = this.props;
    
    let errorAge = undefined;
    if( idade < 16 && idade !== 0 ) errorAge = "Necessário ter pelo menos 16 anos para participar!"

    let errorName = undefined;
    if (nome.length < 5 && nome.length !== 0) errorName = "Coloque seu nome completo!"

    return (
      <fieldset>
        <legend>Dados pessoais</legend>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={ handleChange }
            value={ email }
          />
        </label>
        <br />

        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={ handleChange }
            value={ nome }
          />
          <p style={{background: "red"}}>{errorName ? errorName : ''}</p>
        </label>

        <label htmlFor="idade">
          Idade
          <input
            type="number"
            name="idade"
            id="idade"
            onChange={ handleChange }
            value={ idade }
            min="0"
          />
          <p style={{color: "red"}}>{ errorAge ? errorAge : '' }</p>
        </label>
      </fieldset>
    )
  }
}

DadosPessoais.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired ,
  email: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,

}

export default DadosPessoais;
