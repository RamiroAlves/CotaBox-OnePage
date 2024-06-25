import styled from 'styled-components';

interface IStyle {
    primary?: boolean;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

export const ModalHeader = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
`;

export const ModalBody = styled.p`
  margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    margin-left: 0.5rem;
  }
`;

export const Button = styled.button<IStyle>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.primary ? '#d9534f' : '#5bc0de'};
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props => props.primary ? '#c9302c' : '#31b0d5'};
  }
`;