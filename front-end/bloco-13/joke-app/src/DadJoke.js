import React from "react";

class DadJoke extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storeJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeader = { headers: { Accept: 'application/json' }}
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeader)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }
  
  componentDidMount()  {
    this.fetchJoke();
  }

  renderJoke() {
    const {jokeObj} = this.state;
    
    return (
      <>
        <p>{jokeObj.joke}</p>
      </>
    );
  }  

  render() {
    const { jokeObj } = this.state
    const loading = 'Loading...'
    return  (
      jokeObj ? this.renderJoke() : loading
    )
}

}
export default DadJoke;
