import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { database } from "./Firebase";

ReactDOM.render(<App database={database} />, document.getElementById('root'));

