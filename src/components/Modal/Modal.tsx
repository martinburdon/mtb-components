import React, { FC } from 'react';
import { Container, Close } from './styles';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import ReactModal from 'react-modal';
import { FaTimesCircle } from 'react-icons/fa';

export type ModalType = {
  isOpen: boolean;
  onRequestClose?: () => void;
  onAfterClose?: () => void;
  onAfterOpen?: () => void;
  elementToFocusOnOpen?: React.RefObject<HTMLElement>;
  hideCloseButton?: boolean;
};

export const setAppElement = (appEl: string) => ReactModal.setAppElement(appEl);

export const Modal: FC<ModalType> = ({
  children,
  isOpen,
  onRequestClose,
  onAfterClose,
  onAfterOpen,
  elementToFocusOnOpen,
  hideCloseButton = false
}) => {
  let overlayWindowElement: Element;

  const handleCloseModal = () => {
    onRequestClose && onRequestClose();
  };
  const handleAfterClose = () => {
    clearAllBodyScrollLocks();
    onAfterClose && onAfterClose();
  };
  const handleAfterOpen = () => {
    // Disable scrolling on the body element but allow on overlay window
    disableBodyScroll(overlayWindowElement);
    if (elementToFocusOnOpen && elementToFocusOnOpen.current) {
      elementToFocusOnOpen.current.focus();
    }
    onAfterOpen && onAfterOpen();
  };

  const customStyles = {
    content: {
      padding: '0 20px 20px'
    }
  };

  return (
    <Container>
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={handleAfterOpen}
        onAfterClose={handleAfterClose}
        style={customStyles}
        contentRef={(element) => (overlayWindowElement = element)}
      >
        {!hideCloseButton && (
          <Close onClick={handleCloseModal}>
            <FaTimesCircle />
          </Close>
        )}
        {children}
      </ReactModal>
    </Container>
  );
};
