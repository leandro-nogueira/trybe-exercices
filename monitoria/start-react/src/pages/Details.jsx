import React from "react";
import PropTypes from 'prop-types';

class Details extends React.Component {
  constructor() {
    super();
    this.state ={
      cocktail:[],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id)
    try {
      const fetchCocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const fetchCocktailJson = await fetchCocktail.json();
      console.log(fetchCocktailJson);
      this.setState({
        cocktail: fetchCocktailJson.drinks[0],
      })

    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const { cocktail } = this.state;  
    return (
      <>
        <h1>{cocktail.strDrink}</h1>
        <img src={ cocktail.strDrinkThumb } alt={ cocktail.strDrink } />
        <p>{cocktail.strInstructions}</p>
      </>
    );
  } 
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf({
      id: PropTypes.string,
    }),
  }).isRequired
};

export default Details;