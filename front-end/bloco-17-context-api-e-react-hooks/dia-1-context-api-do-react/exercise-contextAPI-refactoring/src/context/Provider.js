import React from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const {children} = this.props;

    return (
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    )
  }
}

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  export default Provider;
