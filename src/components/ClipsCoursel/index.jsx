import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import Loader from 'react-loaders';
import '../../styles/loaders.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ClipComponent from './Clip';
import { Title } from "../shared/StyledComponents";
import { useQuery, gql } from '@apollo/client';

const GET_USER_AND_CLIPS = gql`
  {
    helix {
      me {
        displayName
        clips {
          id
          embedUrl
          thumbnailUrl
          title
          views
          creationDate
        }
      }
    }
  }
`;

const ClipsContainer = styled.section`
  padding: 0rem 1rem;

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    color: #fafafa;
    border-color: #fafafa;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;

const carouselClipsSettings = {
  dotsDisabled: true,
  swipeDisabled: true,
  infinite: false,
  responsive: {
    0: { items: 1 },
    980: { items: 2 },
    1390: { items: 3 },
  },
};

const carouselLoadingSettings = {
  dotsDisabled: true,
  swipeDisabled: true,
  infinite: true,
  responsive: {
    0: {
      items: 2,
    },
    700: {
      items: 2,
    },
  },
};

const ClipsCoursel = () => {
  const { loading, data } = useQuery(GET_USER_AND_CLIPS);
  const [state, setState] = useState({
    showModal: false,
  });

  const onClipClick = (event) => {
    const embedURL = event.currentTarget.attributes['data-embed-url'].value;
    setState({
      embedURL,
      showModal: true,
    });
  }

  const onDismissModal = () => {
    setState({
      showModal: false,
    });
  }

  const _renderClips = () => {
    let clips = [];
    let settings;

    if (loading) {
      settings = carouselLoadingSettings;
      for (let index = 0; index < 2; index++) {
        clips.push(
          <div class="text-center" style={{ height: '10rem' }}>
            <h1>Loading Clips</h1>
            <Loader type="line-scale" active />
          </div>
        );
      }
    } else if(data) {
      settings = carouselClipsSettings;
      data.helix.me.clips.forEach(clip => {
        clips.push(
          <ClipComponent clip={clip} onClipClick={onClipClick} />
        );
      });
    }

    return <AliceCarousel {...settings}>{clips}</AliceCarousel>;
  }

  const _renderFrame = () => {
    if (!state.showModal) {
      return null;
    }

    return (
      <iframe
        title="Clip"
        src={state.embedURL}
        height="400"
        width="600"
        scrolling="no"
        allowfullscreen="true"
      />
    );
  }

  const _displayModal= () => {
    if (state.showModal) {
      return (
        <Modal onDismiss={onDismissModal}>{_renderFrame()}</Modal>
      );
    }

    return null;
  }

  return (
    <ClipsContainer id="clips" className="site-section">
      <Title className="header" content="Clips" />
      {_renderClips()}
      {_displayModal()}
    </ClipsContainer>
  );
}

export default ClipsCoursel;
