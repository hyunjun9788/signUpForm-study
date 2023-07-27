import React from 'react';
import styled from 'styled-components'


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 색상을 투명도가 있는 검정색으로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const MessageContent = styled.p`
font-weight: bold;
`
const CloseButton = styled.button`
background-color:royalblue;
  color:white;
  border-radius: 20px;
  width:50px;
`
const Modal = ({message,onClose}) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent>
                <MessageContent>{message}</MessageContent>
                <CloseButton onClick={onClose}>닫기</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;