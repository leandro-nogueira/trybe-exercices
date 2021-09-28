import React from 'react';
import './App.css'

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }

  // }

  handleChange1 = () => {
    console.log('cheguei 1')
  }
  handleChange2 = () => {
    console.log('cheguei 2')
  }
  handleChange3 = () => {
    console.log('cheguei 3')
  }


  render() {
    return (
      <div className="App-header">
        <div>
          <button onClick={ this.handleChange1 } >Meu Botão 1</button>  
          <button onClick={ this.handleChange2 } >Meu Botão 2</button>  
          <button onClick={ this.handleChange3 } >Meu Botão 3</button>  
        </div>
      </div>
    )
  }
}

export default App;