import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Title } from "../shared/StyledComponents";

const FooterContainer = styled.footer`
  min-height: 10rem;
  display: flex;
`;

class Footer extends PureComponent {
  render() {
    return (
      <FooterContainer id="contact" className="site-section grid-column-container">
        <Title className="header" content="Contact" />
        <div className="grid-row-container" style={{ paddingTop: '1rem'}}>
          <div className="grid-column-container flex-1">
            <a href="mailto:erik@gooseman.codes" target="blank" className="contact-info">
              <i class="fas fa-at"></i>
              <span>Send me an e-mail</span>
            </a>
            <a href="https://twitch.tv/talk2megooseman" target="blank" className="contact-info">
              <i className="fab fa-twitch"></i>
              <span>Follow Me On Twitch</span>
            </a>
            <a href="https://discord.gg/unMtWz3" target="blank" className="contact-info">
              <i className="fab fa-discord"></i>
              <span>Join My Discord</span>
            </a>
            <a href="https://twitter.com/talk2megooseman" target="blank" className="contact-info">
              <i className="fab fa-twitter"></i>
              <span>Follow Me On Twitter</span>
            </a>
            <a href="https://github.com/talk2megooseman" target="blank" className="contact-info">
              <i className="fab fa-github"></i>
              <span>Checkout Out My Github</span>
            </a>
            <div className="flex-1 pad-top">Copyright &copy; 2020 Erik Guzman</div>
          </div>
          <div className="grid-row-container flex-1 flex-v-align-center">
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
