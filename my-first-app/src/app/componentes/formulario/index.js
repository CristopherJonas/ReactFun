import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Input = props => {
  return (
    <div>
      {props.label && <label> {props.label} </label>}
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type || "text"}
      />
      {props.erro && <small> {props.erro} </small>}
    </div>
  );
};

const DEFAULT_STATE = {
  form: {
    nome: "",
    email: "",
    telefone: "",
    cpf: ""
  },
  erros: {},
  mostrarForm: false
};

class Formulario extends React.Component {
  state = DEFAULT_STATE;

  componentWillUpdate(nextProps) {
    debugger;
    if (!this.props.cliente && nextProps.cliente) {
      this.setState({
        form: nextProps.cliente,
        erros: {},
        mostrarForm: true
      });
    }
    if (this.props.cliente && !nextProps.cliente) {
      this.setState(DEFAULT_STATE);
    }
  }

  validar = () => {
    const { form } = this.state;
    const erros = {};
    ["nome", "telefone", "cpf", "email"].forEach(item => {
      if (!form[item]) erros[item] = "Digite o " + item;
    });
    this.setState({ erros });
    return Object.keys(erros).length === 0;
  };

  onChange = (field, ev) => {
    const { form } = this.state;
    form[field] = ev.target.value;
    this.setState({ form }, () => {
      this.validar();
    });
  };

  handleSubmit = () => {
    if (!this.validar()) return null;
    const { form } = this.state;
    const { cliente } = this.props;
    if (cliente) {
      this.props.updateCliente(cliente.id, form);
    } else {
      this.props.addCliente(form);
    }
    this.setState(DEFAULT_STATE);
    this.setState({
      form: {
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
      }
    });
  };

  renderForm() {
    const { form, erros } = this.state;
    return (
      <div className="Formulario">
        <div>
          <Input
            value={form.nome}
            onChange={ev => this.onChange("nome", ev)}
            placeholder={"Digite o nome"}
            label={"Nome"}
            erro={erros.nome}
          />
          <Input
            value={form.telefone}
            onChange={ev => this.onChange("telefone", ev)}
            placeholder={"Digite o telefone"}
            label={"Telefone"}
            erro={erros.telefone}
          />
          <Input
            value={form.cpf}
            onChange={ev => this.onChange("cpf", ev)}
            placeholder={"Digite o cpf"}
            label={"CPF"}
            erro={erros.cpf}
          />
          <Input
            value={form.email}
            onChange={ev => this.onChange("email", ev)}
            placeholder={"Digite o email"}
            label={"Email"}
            type={"email"}
            erro={erros.email}
          />
          <div>
            <button onClick={this.handleSubmit}>Salvar</button>
          </div>
        </div>
      </div>
    );
  }

  renderBotao() {
    return (
      <div>
        <button onClick={() => this.setState({ mostrarForm: true })}>
          Cadastrar NOVO
        </button>
      </div>
    );
  }

  render() {
    return this.state.mostrarForm ? this.renderForm() : this.renderBotao();
  }
}

const mapStateToProps = state => ({
  cliente: state.clientes.cliente
});

export default connect(
  mapStateToProps,
  actions
)(Formulario);
