const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const arrayDosValuesGeral = Object.values(order);
  const arrayDosValuesOrder = Object.values(arrayDosValuesGeral[3]);
  const arrayDelivery = Object.values(arrayDosValuesOrder[2]);
  const arrayAddress = Object.values(arrayDosValuesGeral[2]);
  

  console.log(`Olá ${arrayDelivery[0]}, entrega para: ${arrayDosValuesGeral[0]}, Telefone: ${arrayDosValuesGeral[1]}, R. ${arrayAddress[0]}, N: ${arrayAddress[1]}, AP: ${arrayAddress[2]}.`)

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newOrder = {
    name: 'Luiz Silva',
    drinks: {
      coke: {
        price: 5,
      }
    },
    payment: {
      total: 50,
    },
  }
  const orderModifier = Object.assign(order, newOrder);
  const arrayDosValuesGeral = Object.values(orderModifier);
  const arrayDosValuesOrder = Object.values(arrayDosValuesGeral[3]);
  const arrayDelivery = Object.values(arrayDosValuesOrder[2]);
  const arrayAddress = Object.values(arrayDosValuesGeral[2]);
  const arrayPedidos = Object.entries(arrayDosValuesOrder[0]);
  const drink = Object.values(arrayDosValuesOrder[1]);
  const arrayDrink = Object.values(drink[0]);
  const price = Object.values(arrayDosValuesGeral[4])
  
 console.log()
  
  // const arreyPizza2 =Object.values(arrayPedidos[1]);
  
  
  console.log(`Olá ${arrayDosValuesGeral[0]} o total do seu pedido de ${arrayPedidos[0][0]}, ${arrayPedidos[1][0]} e ${arrayDrink[0]} é de R$${price}`)

}

orderModifier(order);