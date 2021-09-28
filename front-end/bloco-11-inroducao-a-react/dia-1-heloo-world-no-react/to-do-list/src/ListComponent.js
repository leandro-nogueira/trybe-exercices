import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

const atividade = ['acordar', 'correr', 'cozinhar', 'estudar', 'almoçar', 'trybe'];

const Task = (value, chave) => {
  return (
    <li key={chave}>{value}</li>
  );
}

class ListComponent extends Component {
  render() {
    const element = <ol>
      {atividade.map((item, index) => {
        return Task(item, index)
      })
      }
    </ol>
    return element
  }
}

export default ListComponent;
