import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

  }

  handleChange1 = () => {
    const { numeroDeCliques1 } = this.state;
    this.setState((previewState, _props) => ({
      numeroDeCliques1: previewState.numeroDeCliques1 + 1,
    }))
    if (numeroDeCliques1 % 2) console.log('verde')
  }
  handleChange2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }))
  }
  handleChange3 = () => {    
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }))
  }

  reset = () => {
    this.setState({
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    })
  }

  zerar1 = () => {
    this.setState({
      numeroDeCliques1: 0,
    })
  }

  zerar2 = () => {
    this.setState({
      numeroDeCliques2: 0,
    })
  }

  zerar3 = () => {
    this.setState({
      numeroDeCliques3: 0,
    })
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div className="App-header">
        <div>
          <button onClick={ this.zerar1 }>ZERAR-1</button>
          <button onClick={ this.zerar2 }>ZERAR-2</button>
          <button onClick={ this.zerar3 }>ZERAR-3</button>
        </div>
        <div>
          <button onClick={ this.handleChange1 } >{ numeroDeCliques1 }</button>  
          <button onClick={ this.handleChange2 } >{ numeroDeCliques2 }</button>  
          <button onClick={ this.handleChange3 } >{ numeroDeCliques3 }</button>  
        </div>
        <button onClick={ this.reset }>ReseteTOTAL</button>
      </div>
    )
  }
}

export default App;