import React from "react";

import Formulario from "../formulario";
import Ordenacao from "./ordenacao";
import Pesquisa from "./pesquisa";
import ListaCliente from "./lista";

const Opcoes = () => (
  <div className="Opcoes">
    <div>
      <Ordenacao />
    </div>
    <div>
      <Pesquisa />
    </div>
  </div>
);

export default class Listagem extends React.Component {
  render() {
    return (
      <div className="Listagem">
        <div className="Header">
          <h2> Lista de Clientes</h2>
        </div>
        <hr />
        {/* <Formulario /> */}
        <br />
        <Opcoes />
        <br />
        <ListaCliente />
      </div>
    );
  }
}
