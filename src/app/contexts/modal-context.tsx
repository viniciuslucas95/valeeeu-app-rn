import React, { useRef, useState } from 'react';
import { createContext, PropsWithChildren } from 'react';
import { BaseModal } from '../components/modal';

interface IModalContext {
  openModal(): void;
  closeModal(): void;
  setupContent(content: JSX.Element): void;
  dragRef: React.MutableRefObject<boolean>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export function ModalProvider({ children }: PropsWithChildren<any>) {
  const [content, setContent] = useState<JSX.Element>(<></>);
  const [isOpen, setIsOpen] = useState(false);
  const dragRef = useRef(false);

  function setupContent(content: JSX.Element) {
    setContent(content);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{ dragRef, openModal, closeModal, setupContent }}
    >
      {children}
      {isOpen ? (
        <BaseModal
          closeModal={closeModal}
          dragRef={dragRef}
          content={content}
        />
      ) : null}
    </ModalContext.Provider>
  );
}
