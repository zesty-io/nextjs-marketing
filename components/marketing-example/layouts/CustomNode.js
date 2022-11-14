import React from 'react';

export function CustomNode(props) {
  console.log('running custom node')
  return (
    <div dangerouslySetInnerHTML={{ __html: props.data.html }} />
  );
}