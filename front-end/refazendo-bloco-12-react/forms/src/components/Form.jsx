import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavaraFavorita: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoFavorito, email, nome, idade, vaiComparecer, palavraFavorita } = this.state;
    return (
      <div>
        <h2>Estados React: ferramenta incrível ou reagindo a regionalismo?</h2>
        <form className="form">
          <label htmlFor="estadoFavorito">
            Diga qual é seu estado favorito! Do Brasil ou do React?!
            <textarea
              name="estadoFavorito"
              id="estadoFavorito"
              onChange={ this.handleChange }
              value={ estadoFavorito }
            />
          </label>

          <fieldset>
            <legend>Dados pessoais</legend>

            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>

            <label htmlFor="nome">
              Nome
              <input
                type="text"
                name="nome"
                id="nome"
                onChange={ this.handleChange }
                value={ nome }

              />
            </label>

            <label htmlFor="idade">
              Idade
              <input
                type="number"
                name="idade"
                id="idade"
                onChange={ this.handleChange }
                value={ idade }
              />
            </label>
          </fieldset>

          <label htmlFor="palavraFavorita">
            Escolha sua palavra chave Favorita:
            <select
              name="palavraFavorita"
              id="palavraFavorita"
              value={ palavraFavorita }
              onChange={ this.handleChange }
            >
              <option value="Componente" >Componente</option>
              <option value="Estado" >Estado</option>
              <option value="Evento" >Evento</option>
              <option value="Props" >Props</option>

            </select>
          </label>

          <label htmlFor="vaiComparecer">
            Vai comparecer?
            <input
              type="checkbox"
              name="vaiComparecer"
              id="vaiComparecer"
              value={ vaiComparecer }
              onChange={ this.handleChange }
             />
          </label>

          <label htmlFor="file">
            Organize sua documentação em PDF e agilize o credenciamento!!!
            <input type="file" name="file" id="file" />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
