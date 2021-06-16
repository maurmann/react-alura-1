import React, { Component } from "react";

class FormularioNotas extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _CriarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props._CriarNota(this.titulo,this.texto);
  }

  render() {
    return (
      <form onSubmit={this._CriarNota.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={this._handleTitleChange.bind(this)}
        ></input>
        <textarea
          placeholder="Nota"
          onChange={this._handleTextChange.bind(this)}
        ></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioNotas;
