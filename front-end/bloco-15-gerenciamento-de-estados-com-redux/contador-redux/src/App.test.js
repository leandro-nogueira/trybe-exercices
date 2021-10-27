import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import App from './App';
import store from './store';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
}


describe('Testando com Redux', () => {
  beforeEach(cleanup);
  test('verificando se os componentes estão natela', () => {
    renderWithRedux(<App />);
    const bton = screen.getByRole('button', { name: /Clique aqui/i });
    expect(bton).toBeInTheDocument();
    const numberCount = screen.getByText('0');
    expect(numberCount).toBeInTheDocument();
  });

  test('clicando 5 vezes', () => {
    renderWithRedux(<App/>, {initialState: {clickReducer: { counter: 5}}});

    expect(screen.queryByText('5')).toBeInTheDocument();
  })
});


