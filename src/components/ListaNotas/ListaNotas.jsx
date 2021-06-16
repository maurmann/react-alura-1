import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria,index) => {
          return (
            <li key={index}>
              <CardNota></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
