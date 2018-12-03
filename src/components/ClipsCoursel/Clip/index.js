import React from 'react';
import PlayIcon from "react-icons/lib/md/play-arrow";
import styled from 'styled-components';

const Clip = styled.div`
  position: relative;
  background: #000;
  background-image: url(${props => props.thumbnail_url});
  background-size: auto;
  background-position: center;
  display: inline-block;
  width: 25rem;
  height: 16rem;
  border: 0.2rem solid black;
`;

const IconConatiner = styled.div`
  font-size: 5rem;
  color: #fff;
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000;

  filter: opacity(50%);
`;

const Info = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

function toDateTimeString (datetime) {
  const date = new Date(datetime);
  return (`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);
}

const ClipComponent  = ({clip, onClipClick}) => {
  return  (
    <Clip key={clip.video_id} data-embed-url={clip.embed_url} thumbnail_url={clip.thumbnail_url} onClick={onClipClick}>
      <Overlay />
      <IconConatiner>
        <PlayIcon />
      </IconConatiner>
      <Info>
        <div>{clip.title}</div>
        <div>View Count: {clip.view_count}</div>
        <div>{toDateTimeString(clip.created_at)}</div>
      </Info>
    </Clip>
  )
}
export default ClipComponent;
