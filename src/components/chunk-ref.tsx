import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';

export default connect(
  (chunkMap: any, props: any) => {
    return {
      ...props,
      chunkMap,
    };
  },
)(function ChunkRefView(props: any): JSX.Element {
  const style: CSSProperties = {
    wordBreak: 'break-word',
    width: '300px',
  }
  console.log(props.chunkMap[props.chunk_id], props);
  return <div style={style}> {props.chunkMap[props.chunk_id][props.type]} </div>;
});
