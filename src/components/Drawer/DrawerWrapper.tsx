import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import { canvasDialogStateActions } from '~/pages/Studio/canvas-actions/canvas-form-dialog-state';

type PropsType = {
  isOpen: boolean;
  title: string;
  children: React.ReactElement;
};

const DrawerWrapper = ({ isOpen, title, children }: PropsType) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        isCentered
        onClose={canvasDialogStateActions.closeCanvasDialog}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DrawerWrapper;
