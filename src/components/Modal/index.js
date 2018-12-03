import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from "react-icons/lib/md/close";

const ModalContainer = styled.div`
  // display: ${ props => props.show ? 'block' : 'none'};
  background: #fff;
  color: #000;
  white-space: normal;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;

  overflow: auto;

  padding: 1rem;

  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.50);
  
  border: none;
  border-radius: 0.2rem;
  z-index: 51;
`;

const Overlay = styled.div`
  // display: ${ props => props.show ? 'block' : 'none'};
  z-index: 50;
  position: fixed;
  background: #000;
  filter: opacity(50%);
  
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const CloseContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
`;

class Modal extends PureComponent {
  static propTypes = {
    onDismiss: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.dismissModal = this.dismissModal.bind(this);
  }

  dismissModal() {
    this.props.onDismiss();
  }

  render() {
    return (
      <React.Fragment>
        <ModalContainer>
          <CloseContainer onClick={this.dismissModal}><CloseIcon /></CloseContainer>
          <div>
            {this.props.children}
          </div>
        </ModalContainer>
        <Overlay onClick={this.dismissModal} />
      </React.Fragment>
    );
  }
}

export default Modal;