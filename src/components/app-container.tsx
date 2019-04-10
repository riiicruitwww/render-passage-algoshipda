import { connect } from 'react-redux';
import { submit } from '../actions';

import App from './app';

interface IDispatchToProps {
  onSubmit: () => void;
}

export default connect<IAppState, IDispatchToProps> (
  (state: IAppState) => {
    return state;
  },
  {
    onSubmit: submit,
  },
)(App);
