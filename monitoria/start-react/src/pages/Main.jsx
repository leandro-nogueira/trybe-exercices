import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      cocktails: null,
      loading: false,
      NotFound: false,
    };

  }

  handlerInputQuery = ({ target: { name, value} }) => {
    this.setState({
      [name]: value,
    });
  }

  fetchData = () => {
    this.setState({
      loading: true, cocktails: null, NotFound: false,
    }, () => {
      const { query } = this.state;
      
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((response) => {  
        if (!response.drinks) {
          return this.setState({
            NotFound: true,
            loading: false,
          });
        }
        this.setState({
          cocktails: response.drinks,
          loading: false,
        });
      })
      .catch((error) => console.error(error));
    });
  }

  render() {
    const { query, cocktails, loading, NotFound } = this.state;
    return (
      <div>
        <label htmlFor='input-query'>
          Digiste o termo da pesquisa:
          <input
            type='text'
            name='query'
            id='input-query'
            value={ query }
            onChange={ this.handlerInputQuery }
          />
        </label>
        <button type='button' onClick={ this.fetchData }>Pesquisar</button>
        {loading && <div>Loading...</div>}
        {cocktails && cocktails.map((cocktail) => (
          <Link key={cocktail.idDrink} to={`/details/${cocktail.idDrink}`}>
            <h1 key={ cocktail.idDrink }>{ cocktail.strDrink }</h1>
            <img src={ cocktail.strDrinkThumb } alt='imagem Drink' width='200' />          
          </Link>
        ))}
        {NotFound && <div>Nenhuma Bebida encontrada</div>}
      </div>
    );
  }
}

export default Main;
