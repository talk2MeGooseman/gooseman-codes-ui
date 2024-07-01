import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Title } from "../shared/StyledComponents";

const ProfilePic = styled.img`
  background: #000;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

class Footer extends PureComponent {
  render() {
    return (
      <section id="about" className="site-section">
        <Title className="header" content="About Me" />
        <div className="" style={{ paddingTop: '3rem'}}>
          <div className="grid-row-container flex-1">
            <div className="flex-1 text-left">
              <ProfilePic src="/images/me.png" />
            </div>
            <span className="description flex-5">
              <div className="title">Erik (Gooseman) Guzman</div>
              <div className="">
                I am a Senior Software Developer and Twitch programming streamer. On my stream I love to create projects that integrate with the Twitch Development Platform to enhance my stream and share the experience with others. My stream welcome all kinds of people, coders and non-coder alike. I enjoy answering programming questions from "How do I become a programmer?" to more advanced questions like "Why did you choose ReactJS for your Twitch Extension?". Come watch me stream every Monday/Wednesday/Friday @ 7:00PM PST/PDT.
              </div>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

