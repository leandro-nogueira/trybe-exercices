import React from "react";

class Pokemon extends React.Component {
  render() {
    const {pokemon: {name, type, averageWeight, image} } = this.props;
      return (
      <section>
        <h2>{name}</h2>
        <p>Tipo/Origem: {type}</p>
        <p>Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={`imagem do ${name}`} />
      </section>
    );
  }
}

export default Pokemon;
