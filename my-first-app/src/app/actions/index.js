import {
  GET_CLIENTES,
  ADD_CLIENTES,
  UPDATE_CLIENTE,
  REMOVE_CLIENTE,
  SET_ORDENACAO,
  SET_PESQUISA
} from "./types";

const prepararCliente = cliente => {
  const id = generateId();
  const criadoEm = new Date().getTime();
  const atualizadoEm = new Date().getTime();
  return { ...cliente, id, criadoEm, atualizadoEm };
};

const generateId = () => Math.floor(Math.random() * 100000 + 100000);

const data = [
  {
    id: 1,
    nome: "João",
    cpf: "000.000.000-00",
    email: "joao@teste.com",
    telefone: "98888-4444",
    criadoEm: new Date().getTime(),
    atualizadoEm: new Date().getTime()
  }
];

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const addCliente = cliente => ({
  type: ADD_CLIENTES,
  cliente: prepararCliente(cliente)
});

export const updateCliente = (id, cliente) => ({
  type: UPDATE_CLIENTE,
  cliente: { id, ...cliente, atualizadoEm: new Date().getTime() }
});

export const removeCliente = id => ({ type: REMOVE_CLIENTE, id });

export const setOrdenacao = ev => ({
  type: SET_ORDENACAO,
  ordenacao: ev.target.value
});

export const setPesquisa = ev => ({
  type: SET_PESQUISA,
  pesquisa: ev.target.value
});
