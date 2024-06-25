import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "./styles";

interface IConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

const ConfirmModal: React.FC<IConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Atenção!</ModalHeader>
        <ModalBody>Você tem certeza que deseja apagar o item {itemName}?</ModalBody>
        <ModalFooter>
          <Button primary onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Delete</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmModal;
