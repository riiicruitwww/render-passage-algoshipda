import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './assets/reset.scss';
import { createStore, AnyAction, Store } from 'redux';

function reducer(state = '', action: AnyAction) {
  return state;
}

function init() {
  const store: Store = createStore(reducer, 'hello');
  ReactDOM.render(
    <Provider store={store}>
      <div title="hello">Hello World</div>,
    </Provider>,
    document.querySelector('.app'),
  );
}

window.addEventListener('load', init, false);
