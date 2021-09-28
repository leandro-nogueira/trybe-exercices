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
    this.setState((previewState, _props) => ({
      numeroDeCliques1: previewState.numeroDeCliques1 + 1,
    }))
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
  


  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div className="App-header">
        <div>
          <button onClick={ this.handleChange1 } >{ numeroDeCliques1 }</button>  
          <button onClick={ this.handleChange2 } >{ numeroDeCliques2 }</button>  
          <button onClick={ this.handleChange3 } >{ numeroDeCliques3 }</button>  
        </div>
      </div>
    )
  }
}

export default App;