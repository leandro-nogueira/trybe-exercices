import React from "react";

class Button extends React.Component {
  
  render() {
    const { typeBtn, labelBtn, onClickBtn } = this.props;
    return (

      <button
        type={ typeBtn }
        onClick={ onClickBtn }
      >
        { labelBtn }
      </button>
      


    )
  }
}

export default Button;
