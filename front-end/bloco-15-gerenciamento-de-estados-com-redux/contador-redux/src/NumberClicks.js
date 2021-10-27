import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    return <span>{this.props.counter}</span>;
  }
}

const mapStateToProps = state => ({
  counter: state.clickReducer.counter});

export default connect(mapStateToProps)(NumberClicks);