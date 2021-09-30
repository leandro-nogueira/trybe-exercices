import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { handleChange, estadoFavorito } = this.props;
    
    let errorTextArea = undefined;
    if( estadoFavorito.length > 120 ) errorTextArea = "tente resumir seu comentário em 120 caracteres!"

    return (
      <label htmlFor="estadoFavorito">
        Diga qual é seu estado favorito! Do Brasil ou do React?!
        <textarea
          name="estadoFavorito"
          id="estadoFavorito"
          onChange={ handleChange }
          value={ estadoFavorito }
        />
        <p style={{color: "green"}}>{errorTextArea ? errorTextArea : ''}</p>
      </label>
    )
  }
}

Text.propTypes = {
  handleChange: PropTypes.func.isRequired,
  estadoFavorito: PropTypes.string.isRequired,
}

export default TextArea;
