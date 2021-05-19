import React, { FC } from 'react';
export declare type ModalType = {
    isOpen: boolean;
    onRequestClose?: () => void;
    onAfterClose?: () => void;
    onAfterOpen?: () => void;
    elementToFocusOnOpen?: React.RefObject<HTMLElement>;
    hideCloseButton?: boolean;
};
export declare const setAppElement: (appEl: string) => void;
export declare const Modal: FC<ModalType>;
