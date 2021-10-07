import React from 'react';

class Button extends React.Component {
  
  render() {
    const { typeBtn, labelBtn, onClickBtn, disable } = this.props;
    return (

      <button
        type={ typeBtn }
        onClick={ onClickBtn }
        disabled={ disable }
      >
        { labelBtn }
      </button>
      


    )
  }
}

export default Button;
