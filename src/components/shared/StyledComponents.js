import styled from 'styled-components';

export const Title = styled.div`
      &::before {
        position: absolute;
        top: 0rem;
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
        content: '${props => props.content}';
      }
    `;