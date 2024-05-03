'use client';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { IconClose } from '../../../public';
import Image from 'next/image';
import PromptModalContent from './PromptModalContent';

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50rem',
    height: '50rem',
  },
};

function PromptModal({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
          onSelect();
        }}>
        {children}
      </button>

      <ReactModal style={customStyle} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="">
          <div className="flex justify-end">
            <button onClick={() => setShowModal(false)}>
              <Image src={IconClose} alt="창닫기 버튼" />
            </button>
          </div>
          <PromptModalContent />
        </div>
      </ReactModal>
    </>
  );
}

export default PromptModal;
