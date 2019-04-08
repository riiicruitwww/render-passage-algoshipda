import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';

import './assets/style.scss';

import reducer from './reducers';

import axios from 'axios';
import { fetchDone } from './actions';

function init() {
  axios.get('/data')
    .then(({ data }): any => {
      store.dispatch(fetchDone(
        data.package.question_passage_box.passages,
        data.package.chunk_map,
        data.package.questions,
      ));
    });

  const store: Store = createStore(reducer);

  ReactDOM.render(
    (
      <Provider store={store}>
        <App/>
      </Provider>
    ),
    document.querySelector('.app'),
  );
}

window.addEventListener('load', init, false);
