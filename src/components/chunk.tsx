import React, { CSSProperties } from 'react';

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

    const modifiedStyle: CSSProperties = {
      ...defaultSplittedStyle,
      color: toRGB(font_color),
      fontFamily: font_name,
      ...mergeSegmentStyles(styles),
    };

    return (
      <span style={modifiedStyle} key={i}>
        {chunk.substring(begin, begin + offset) || ' '}
      </span>
    );
  });
  return str;
}

interface IChunkViewProps {
  data: IChunkRef;
  chunk: string;
}

export default function ChunkView({ data, chunk }: IChunkViewProps): JSX.Element {
  const children: ISegment[] = data.children.length > 0
    ? data.children
    : [{
      name: 'segment',
      data: {
        styles: [],
        begin: 0,
        offset: 9999,
        font_color: [0, 0, 0],
        font_size: 10,
        font_name: '',
        riiid_font_color: 'black',
        riiid_font_size: 'm',
      },
    }]; // dummy children;

  const splittedChunk = splitChunk(chunk, children);
  return <div style={defaultChunkStyle}>{splittedChunk}</div>;
}
