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

  colorChange = (nClick) => {
    return nClick % 2 ? 'green' : 'red'
  }

  handleChange1 = () => {
    const { numeroDeCliques1 } = this.state;
    this.setState((previewState, _props) => ({
      numeroDeCliques1: previewState.numeroDeCliques1 + 1,
    }), () => {
      console.log(this.colorChange(numeroDeCliques1))
    })     
  }

  handleChange2 = () => {
    const { numeroDeCliques2 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }), () => {
      console.log(this.colorChange(numeroDeCliques2))
    })
  }

  handleChange3 = () => {    
    const { numeroDeCliques3 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }), () => {
      console.log(this.colorChange(numeroDeCliques3))
    })
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
          <button onClick={ this.zerar1 } style={{background: this.colorChange(numeroDeCliques1)}} >ZERAR-1</button>
          <button onClick={ this.zerar2 } style={{background: this.colorChange(numeroDeCliques2)}} >ZERAR-2</button>
          <button onClick={ this.zerar3 } style={{background: this.colorChange(numeroDeCliques3)}} >ZERAR-3</button>
        </div>
        <div>C
          <button onClick={ this.handleChange1 } style={{background: this.colorChange(numeroDeCliques1)}} >Contador de cliques = { numeroDeCliques1 }</button>  
          <button onClick={ this.handleChange2 } style={{background: this.colorChange(numeroDeCliques2)}} >Contador de cliques = { numeroDeCliques2 }</button>  
          <button onClick={ this.handleChange3 } style={{background: this.colorChange(numeroDeCliques3)}} >Contador de cliques = { numeroDeCliques3 }</button>  
        </div>
        <button onClick={ this.reset }>ReseteTOTAL</button>
      </div>
    )
  }
}

export default App;