import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  font-size: 1rem;
  color: var(--light-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.div`
  font-size: 12px;
  color: var(--light-color);
  line-height: 17px;
  padding-top: 0.5rem;
`;

const Button = styled.a`
  text-decoration: none;
  text-align: center;
  width: 100px;
  padding: 5px 10px;
  outline: none;
  border: none;
  color: var(--dark-color)!important;
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid var(--twitch-purple);
  background: var(--twitch-purple);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--light-color);
    color: #fff;
  }
`;

const Card = props => {
  const Card = styled.div`
    padding: 10px 15px;
    width: 300px;
    min-height: 120px;
    background: #201c2b;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    border-left: ${props => '5px solid ' + props.color};
  `;

  const Pill = styled.span`
    text-transform: capitalize;
    background: ${props => props.pillColor ? props.pillColor : 'var(--twitch-accent-color)' };
    padding: 0.1rem;
    border: 1px solid #000000;
    border-radius: 13%;
    font-size: 0.7rem;
    margin-right: 5px;
    color: var(--dark-color);
    font-weight: bold;
    letter-spacing: 1px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0px;
    }
  `;

  let pills = props.pills.map(t => {
    return <Pill pillColor={props.pillColor}>{t}</Pill>;
  });

  return (
    <Card color={props.pillColor || '#4b367c'}>
      <Title>{props.title}</Title>
      <div className="pills">{pills}</div>
      <ResourceDescription>{props.description}</ResourceDescription>
      <Button href={props.link} target="_blank">
        Visit website
      </Button>
    </Card>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  pillColor: PropTypes.string,
  pills: PropTypes.array,
  description: PropTypes.string,
  link: PropTypes.string,
}

export default Card;
