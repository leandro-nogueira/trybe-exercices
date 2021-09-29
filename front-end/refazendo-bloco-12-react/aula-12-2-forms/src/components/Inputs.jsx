import React from 'react';

class Inputs extends React.Component {
  
  render() {
    const { handleChange, inputLabel, value, type, name} = this.props;
    return (
      <label htmlFor={ name }>
        { inputLabel }
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ handleChange }
          value={ value } 

        />
      </label>


    )
  }
}

export default Inputs;
