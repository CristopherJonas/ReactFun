import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Cliente = ({cliente}) => (
  <tr>
    <td>{cliente.nome}</td>
    <td> {cliente.telefone}</td>
    <td> {cliente.email}</td>
    <td> {cliente.cpf}</td>
  </tr>
);

class ListaClientes extends React.Component {
  componentDidMount() {
    this.props.getClientes();
  }

  ordenacao = (a, b) => {
    const { ordenacao } = this.props;
    if (ordenacao === "a-z") return a.nome.localeCompare(b.nome);
    else if (ordenacao === "z-a") return -1 * a.nome.localeCompare(b.nome);
    else if (ordenacao === "criacao")
      return new Date(a.criadoEm) - new Date(b.criadoEm);
  };

  pesquisa = ({ nome, endereco, email, cpf }) => {
    const { pesquisa } = this.props;
    if (!pesquisa) return true;
    const item = [nome, endereco, email, cpf].join(";");
    return item.includes(pesquisa);
  };

  render() {
    const { clientes } = this.props;
    return (
      <div className="ListaClientes">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {(clientes || [])
              .filter(this.pesquisa)
              .sort(this.ordenacao)
              .map((cliente, index) => (
                <Cliente cliente={cliente} key={index} />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clientes: state.clientes.clientes,
  ordenacao: state.clientes.ordenacao,
  pesquisa: state.clientes.pesquisa
});

export default connect(
  mapStateToProps,
  actions
)(ListaClientes);
