import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { createStore, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

import './assets/reset.scss';
import Passage from './components/passage-view';

async function init() {
  function reducer(state: any, action: AnyAction) {
    return state;
  }

  const defaultAppStyle: CSSProperties = {
    margin: '0 auto',
    width: '300px',
  };

  const data: any = await axios.get('/data').then((res: any) => res.data);

  const store: Store = createStore(reducer, data.package.chunk_map);

  const passages = data.package.question_passage_box.passages
            .map((p: IPassage, i: number) => <Passage key={i} {...p} />);

  ReactDOM.render(
    <Provider store={store}>
      <div style={defaultAppStyle}> {passages} </div>,
    </Provider>,
    document.querySelector('.app'),
  );
}

window.addEventListener('load', init, false);
