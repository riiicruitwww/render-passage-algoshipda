import React, { CSSProperties } from 'react';
import rendererMapper from './renderer-mapper';

export default function NoticePassage(props: INoticePassage) {
  const style: CSSProperties = {
  };

  return <div style={style}> {props.view_tree.children && props.view_tree.children.map(rendererMapper)} </div>;
}
