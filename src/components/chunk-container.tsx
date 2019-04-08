import { connect } from 'react-redux';
import ChunkView from './chunk';

interface IStateToProps {
  chunk: string;
}

export default connect<IStateToProps>(
  (state: IAppState, { data: { type, chunk_id } }: { data: IChunkRef }) => {
    return {
      chunk: state.chunkMap[chunk_id][type] as string,
    };
  },
)(ChunkView);
