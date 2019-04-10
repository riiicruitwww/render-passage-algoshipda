import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { choiceSelected } from '../actions';

import ChoiceAreaView from './choice-area';

interface IDispatchToProps {
  onChoiceSelected: (id: number, i: number) => () => void;
}

export default connect<null, IDispatchToProps>(
  null,
  (dispatch: Dispatch) => {
    return {
      onChoiceSelected: (id: number, i: number) => () => dispatch(choiceSelected(id, i)),
    };
  },
)(ChoiceAreaView);
