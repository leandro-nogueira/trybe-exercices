import React from "react";
import './Lista.css';

class Lista extends React.Component {
  
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    // o console log foi adicionado para facilitar a compreensão
    const items = shoppingList.map((item, index) => {
      console.log("item: ", item);
      return (<li key={ index }>{ item }</li>);
    });
    return (
      <>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </>
    )
  }
}

export default Lista;
