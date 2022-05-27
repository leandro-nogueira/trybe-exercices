enum Color {
  preta="black",
  branca="white",
  vermelho="red",
  cinza="grey",  
};

enum Doors {
 motorista = 1,
 carona = 2,
 leftBack = 3,
 rigthBac = 4,
 portaMalas = 5
};

enum Turn {
  rigth = "direita",
  left = "esquerda",
  front = "siga em frente"
};

class Car {
  _brand: string;
  _doors: number;
  _color: Color;

  constructor(brand: string, color: Color, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

    honk() {
      console.log('buzina');
    };


    openTheDoor(n: Doors) {
      console.log(`abre a porta: ${n}`)
    }

    closeTheDoor(n: Doors) {
      console.log(`fecha a porta: ${n}`)
    }

    turnOn() {
      console.log('ligao carro')
    }

    turnOff() {
      console.log('Desliga o carro')
    }

    speedUp() {
      console.log('Acelera o carro')
    }

    speedDown() {
      console.log('Reduz velocidade')
    }

    stop() {
      console.log('Para')
    }

    turn(t: Turn) {
      console.log(`vire para: ${t}`)
    }
};

const newRace = new Car('Gol', Color.cinza, 4);
newRace.turnOn();
newRace.turn(Turn.front);
newRace.turn(Turn.left)
newRace.turn(Turn.front);
newRace.turn(Turn.rigth)
newRace.stop();
newRace.openTheDoor(Doors.rigthBac);
newRace.honk();
newRace.turnOff();
