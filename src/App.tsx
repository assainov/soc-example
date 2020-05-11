import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';
import Home from './views/home';

function App() {
  return (
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  );
}

export default App;
