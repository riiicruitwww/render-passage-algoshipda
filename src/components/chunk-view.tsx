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

export default connect(
  // @TODO: any 문제푸는 UI 넣을 떄 수정해야함
  (state: any, { type, chunk_id }: IChunkRef) => {
    return {
      chunk: state.package.chunk_map[chunk_id][type],
    };
  },
)(function ChunkView(props: {chunk: string} & IChunkRef): JSX.Element {
  const splittedChunk = splitChunk(props.chunk, props.children);
  return <div style={defaultChunkStyle}>{splittedChunk}</div>;
});
