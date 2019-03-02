import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }

  increment = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  decrement = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  clear = () => {
    this.setState({ contador: 0 })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Contador:{this.state.contador}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.clear}>clear</button>
        </header>
      </div>
    );
  }
}

export default App;
