import React from 'react';
import styled from 'styled-components';
import { Title } from "../shared/StyledComponents";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const BASE_TIER_VALUE = 1000;
const DOLLAR_IN_CENTS = 100;

const GET_SUBSCRIBERS = gql`
  {
    helix {
      me {
        subscribers {
          tier
          user {
            displayName
            id
            profilePictureUrl
          }
        }
      }
    }
    patreon {
      patrons {
        fullName
        currentlyEntitledAmountCents
        lifetimeSupportCents
      }
    }
  }
`;

const SupporterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Supporter = styled.div`
  width: 8rem;
  flex: 1;
`;

const Card = styled.div`
  flex: 1;
  color: #fafafa;
  border-radius: 5px;
  display: inline-block;
  padding: 1rem;
`;

const ProfilePic = styled.img`
  background: #000;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const SupporterName = styled.h3`
  margin: 0;
`;

function CommunitySupporters(props) {
  const { loading, data } = useQuery(GET_SUBSCRIBERS);

  if(loading) return <></>;

  let subscribers = [];
  let patrons = [];

  data.helix.me.subscribers.forEach(sub => {
    if (sub.user.id === "120750024") return;

    subscribers.push(
      <Card key={sub.user.id}>
        <ProfilePic src={sub.user.profilePictureUrl} />
        <SupporterName>{sub.user.displayName}</SupporterName>
        <sub>Tier: {sub.tier/BASE_TIER_VALUE}</sub>
      </Card>
    );
  });

  data.patreon.patrons.forEach(patron=> {
    patrons.push(
      <Card key={patron.fullName}>
        <SupporterName>{patron.fullName}</SupporterName>
        <div>
          <sub>Current Pledge: {patron.currentlyEntitledAmountCents/DOLLAR_IN_CENTS}</sub>
        </div>
        <div>
          <sub>Life Time Pledge Total: {patron.lifetimeSupportCents/DOLLAR_IN_CENTS}</sub>
        </div>
      </Card>
    );
  });

  return (
    <section id="supporters" className="site-section">
      <Title className="header" content="Community Supporters" />
      <h2 className="subtitle">{subscribers.length} Subscribers:</h2>
      <SupporterContainer className="text-center">
        {subscribers}
      </SupporterContainer>
      <h2 className="subtitle">{patrons.length} Patrons:</h2>
      <SupporterContainer className="text-center">
        {patrons}
      </SupporterContainer>
    </section>
  );
}

export default CommunitySupporters;
