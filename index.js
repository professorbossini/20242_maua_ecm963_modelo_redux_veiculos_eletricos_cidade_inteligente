const Redux = require('redux')

const registrarVeiculo = (modelo, placa, cpf) => {
  const cargaAtual = 20 + Math.random() * 80
  //Exercício 1. complete a ação que esta função devolve
  return {

  }
}

const deslocar = (placa, distancia) => {
  //Exercício 2. complete a ação que esta função devolve
  return {

  }
}

//Exercício 3. escreva uma função criadora de ação para recarga de veículos:


const veiculosReducer = (veiculos = [], acao) => {
  switch (acao.type) {
    //Exercício 4. complete todos os cases
    case "REGISTRAR":

    case "DESLOCAR":

    case "RECARREGAR":

    default:
      return veiculos;
  }
};

const { combineReducers, createStore } = Redux

//Exercício 5. combine os reducers e crie o store


//Exercício 6. Crie um único veículo e simule um deslocamento e uma recarga para ele