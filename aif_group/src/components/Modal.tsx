'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ReactModal from 'react-modal';
import Image from 'next/image';

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '75rem',
      height: '92%',
      zIndex: '150',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto',
      padding: 0,
      scrollbarWidth: 'none',
    },
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={() => router.back()}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}>
      <div className="w-full h-[7rem] flex justify-center items-end fixed top-0">
        <div className="w-[90%] flex justify-between items-center mb-[1rem]">
          <div className="font-light font-saira text-[2rem] leading-[80%] tracking-[-0.002em]">AI Fashionista</div>
          <button onClick={() => router.back()} className="p-3">
            <Image alt="close_icon" src={'/icons/close.svg'} width={25} height={25} />
          </button>
        </div>
      </div>
      <div className="overflow-auto w-full h-[calc(100%-9.5rem)] fixed bottom-10">{children}</div>
    </ReactModal>
  );
};

export default Modal;
