import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemons: { id, name, type, averageWeight: { value, measurementUnit}, image }} = this.props;
    console.log(this.props.pokemons)
    return (
      <div>
        <li key={ id }>
          <h2>{ name }</h2>
          <h3>{ type }</h3>
          <p>{ value } { measurementUnit }</p>
          <img src={ image } alt="Imagem do pokemon" />
        </li>
      </div>
      
    )
  }
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  peso: PropTypes.number.isRequired,
  medida: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
};

export default Pokemon;
