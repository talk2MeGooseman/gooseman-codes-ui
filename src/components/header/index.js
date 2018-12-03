import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'

const HeaderDiv = styled.div`
  background: #000;
  color: #fff;
  max-height: 3rem;
  height: 3rem
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderName = styled.div`
  font-size: 1rem;
  flex: 1;
  text-align: left;
  padding-left: 1rem;
  font-weight: 600;
`;

const HeaderLinks = styled.div`
  font-size: 1rem;
  flex: 2;
  display: flex;
  flex-direction: row;
`;


class Header extends PureComponent {
  render() {
    return (
      <HeaderDiv className="">
        <HeaderName>talk2MeGooseman</HeaderName>
        <HeaderLinks className="header-links">
          <Link className="flex-1" to="about" smooth={true} duration={500}>
            About Me
          </Link>
          <Link className="flex-1" to="clips" smooth={true} duration={500}>
            Clips
          </Link>
          <Link className="flex-1" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link className="flex-1" to="learning" smooth={true} duration={500}>
            Learning
          </Link>
          <Link className="flex-1" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </HeaderLinks>
      </HeaderDiv>
    );
  }
}

export default Header;