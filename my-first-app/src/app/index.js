import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Aplicacao from "./componentes/aplicacao";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Aplicacao />
        </div>
      </Provider>
    );
  }
}

export default App;
