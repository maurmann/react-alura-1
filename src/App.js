import { Component } from "react";
import "./App.css";
import FormularioNotas from "./components/FormularioNotas/FormularioNotas";
import ListaNotas from "./components/ListaNotas/ListaNotas";

class App extends Component {
  
  criarNota(titulo,texto)
  {
      console.log(titulo + '->' + texto);
  }
  
  render() {
    return (
      <div className="App">
        <FormularioNotas criarNota={this.criarNota}></FormularioNotas>
        <ListaNotas></ListaNotas>
      </div>
    );
  }
}

export default App;
