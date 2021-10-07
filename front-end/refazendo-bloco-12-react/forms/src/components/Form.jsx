import React from 'react';
import DadosPessoais from './DadosPessoais';
import './Form.css';
import Select from './Select';
import TextArea from './TextArea';

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
      formularioComErros: false,
    }
  }

  handleError = () => {
    this.setState((state) => ({
      formularioComErros: !state.formularioComErros,
    }))
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
          
          <TextArea
            estadoFavorito={ estadoFavorito }
            handleChange={ this.handleChange }
          />

          <DadosPessoais
            handleError={ this.handleError }
            handleChange={ this.handleChange }
            nome={ nome }
            email={ email }
            idade={ parseInt(idade) }
          />

          <Select
            handleChange={ this.handleChange }
            palavaraFavorita= { palavraFavorita }
          />

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
