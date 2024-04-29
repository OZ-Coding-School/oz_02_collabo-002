import React from 'react';
import ReactModal from 'react-modal';
import { IconClose } from '../../../public/icons';
import Image from 'next/image';

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
    height: '40rem',
  },
};

function FormModal({ isModalOpen, selectedLegend, closeModal }) {
  const title =
    selectedLegend === '기타' ? '기타 답변' : selectedLegend === '예' ? '서비스 사용 용도' : ' "아니요"를 선택한 이유';

  return (
    <ReactModal style={customStyle} isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Legend Modal">
      <div className="">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <Image src={IconClose} alt="창닫기 버튼" />
          </button>
        </div>
        <table className="w-full">
          <thead className=" h-[4.5625rem] bg-table_bg">
            <tr className="font-normal">
              <th className="border-t-[1px] border-table_border w-[10%] border-r-[1px]">No.</th>
              <th className="border-t-[1px] border-table_border w-[85%]">{title}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[3.375rem]">
              <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
              <td className="bg-white border-b-[1px] border-table_border text-center"></td>
            </tr>
            <tr className="h-[3.375rem]">
              <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
              <td className="bg-white border-b-[1px] border-table_border text-center"></td>
            </tr>
            <tr className="h-[3.375rem]">
              <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
              <td className="bg-white border-b-[1px] border-table_border text-center"></td>
            </tr>
            <tr className="h-[3.375rem]">
              <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
              <td className="bg-white border-b-[1px] border-table_border text-center"></td>
            </tr>

            <tr className="h-[3.375rem]">
              <td className="bg-text border-b-[1px] border-table_border"></td>
              <td className="bg-text border-b-[1px] border-table_border"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </ReactModal>
  );
}

export default FormModal;
