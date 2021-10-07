import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { palavraFavorita, handleChange } = this.props;
    return (
      <label htmlFor="palavraFavorita">
            Escolha sua palavra chave Favorita:
            <select
              name="palavraFavorita"
              id="palavraFavorita"
              value={ palavraFavorita }
              onChange={ handleChange }
            >
              <option value="Componente" >Componente</option>
              <option value="Estado" >Estado</option>
              <option value="Evento" >Evento</option>
              <option value="Props" >Props</option>

            </select>
          </label>
    )
  }
}

Select.propTypes = {
  palavraFavorita: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Select;
