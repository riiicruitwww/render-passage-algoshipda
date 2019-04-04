import React from 'react';
import ReactDOM from 'react-dom';

import NoticePassage from './components/notice-passage';

import { Provider } from 'react-redux';

import './assets/reset.scss';
import { createStore, AnyAction, Store } from 'redux';

import axios from 'axios';

function reducer(state: any, action: AnyAction) {
  return state;
}

async function init() {

  const data: any = await axios.get('/data').then(({ data }) => data);

  const store: Store = createStore(reducer, data.package.chunk_map);

  ReactDOM.render(
    <Provider store={store}>
      <NoticePassage {...data.package.question_passage_box.passages[0]} />
    </Provider>,
    document.querySelector('.app'),
  );
}

window.addEventListener('load', init, false);
