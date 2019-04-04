import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';

const segmentStyleToCss = {
  bold: {
    fontWeight: 'bold',
  },
  underline: {
    textDecoration: 'underline',
  },
};

function mergeSegmentStyles(styles: SegmentStyle[]) {
  return styles.reduce((acc: CSSProperties, s: SegmentStyle) => {
    return {
      ...acc,
      ...segmentStyleToCss[s],
    };
  }, {});
}

function toRGB([r, g, b]: [number, number, number]) {
  return `rgb(${r}, ${g}, ${b})`;
}

function splitChunk(chunk: string, segments: ISegment[]) {
  const defaultStyle: CSSProperties = {
    whiteSpace: 'pre-wrap',
  };
  const str = segments.map((seg: ISegment, i: number) => {
    const {font_color, font_name, font_size, styles, begin, offset} = seg.data;

    const decoratedStyle: CSSProperties = {
      ...defaultStyle,
      color: toRGB(font_color),
      fontFamily: font_name,
      fontSize: `${font_size}px`,
      ...mergeSegmentStyles(styles),
    };

    return <span style={decoratedStyle} key={i}>
      {chunk.substring(begin, begin + offset) || ' '}
    </span>;
  });
  return str;
}

export default connect(
  (chunkMap: ChunkMap, { chunk_id }: any) => {
    return {
      chunk: chunkMap[chunk_id],
    };
  },
)(function ChunkView(props: {chunk: IChunk} & IChunkRef): JSX.Element {
  const defaultChunkStyle: CSSProperties = {
    wordBreak: 'break-word',
  };
  const splittedChunk = splitChunk(props.chunk[props.type], props.children);
  return <div style={defaultChunkStyle}>
    {splittedChunk}
  </div>;
});
