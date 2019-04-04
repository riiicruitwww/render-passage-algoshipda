import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';

const segmentStyleToCss: {[k in SegmentStyle]: CSSProperties} = {
  bold: {
    fontWeight: 'bold',
  },
  underline: {
    textDecoration: 'underline',
  },
};

const defaultChunkStyle: CSSProperties = {
  wordBreak: 'break-word',
};

export function mergeSegmentStyles(styles: SegmentStyle[]) {
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

function splitChunk(chunk: string, segments: ISegment[]): JSX.Element[] {
  const defaultSplittedStyle: CSSProperties = {
    whiteSpace: 'pre-wrap',
  };

  const str: JSX.Element[] = segments.map((seg: ISegment, i: number) => {
    const {font_color, font_name, font_size, styles, begin, offset} = seg.data;

    const modifidedStyle: CSSProperties = {
      ...defaultSplittedStyle,
      color: toRGB(font_color),
      fontFamily: font_name,
      fontSize: `${font_size}px`,
      ...mergeSegmentStyles(styles),
    };

    return <span style={modifidedStyle} key={i}>
      {chunk.substring(begin, begin + offset) || ' '}
    </span>;
  });
  return str;
}

interface IChunkViewProps {
  data: IChunkRef;
  chunk: string;
}

export default connect(
  (state: IAppState, { data: { type, chunk_id } }: IChunkViewProps) => {
    return {
      chunk: state.chunkMap[chunk_id][type],
    };
  },
)(function ChunkView({ data, chunk }: IChunkViewProps): JSX.Element {
  const splittedChunk = splitChunk(chunk, data.children);
  return <div style={defaultChunkStyle}>{splittedChunk}</div>;
});
