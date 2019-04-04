import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import Passage from './passage-view';

interface IAppProps {
  fetched: boolean;
  chunkMap: ChunkMap;
  passages: IPassage[];
}

const defaultAppStyle: CSSProperties = {
  margin: '0 auto',
  width: '320px',
};

export default connect(
  (state: IAppState) => {
    return state;
  },
)(function App(props: IAppProps) {
  const passages = props.passages
            .map((p: IPassage, i: number) => <Passage key={i} data={p} />);
  return <div style={defaultAppStyle}>
    {passages}
  </div>;
});
