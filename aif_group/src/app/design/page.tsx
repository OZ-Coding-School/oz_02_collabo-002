'use client';

import DesignHeader from '@/containers/design/DesignHeader';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import InputAlert from '@/containers/modal/InputAlert';
import { useState } from 'react';

export default function Design() {
  const [showAlert, setShowAlert] = useState(true);
  const [showSelectBox, setShowSelectBox] = useState(true);
  const [showPreviewBox, setShowPreviewBox] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // 로딩 박스 구현 예정

  const handleStartDesign = () => {
    setShowSelectBox(false);
    setShowPreviewBox(false);
    setShowAlert(false);
  };

  const handleCreateDesign = () => {
    setShowSelectBox(true);
    setShowPreviewBox(false);
  };

  const handleDesignSelection = () => {
    setShowPreviewBox(true);
  };

  return (
    <main className="h-screen">
      <DesignHeader />
      <section
        className={`bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center ${
          showAlert ? 'relative' : ''
        }`}>
        {showAlert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        <div className="flex space-x-7 opacity-100 transition-opacity duration-500">
          <DesignStartBox onCreateDesign={handleCreateDesign} />
          <div
            className={`transition-opacity duration-2000 ease-in-out ${showSelectBox ? 'opacity-100' : 'opacity-0'}`}>
            {showSelectBox && <DesignSelectBox onSelectDesign={handleDesignSelection} />}
          </div>
          <div
            className={`transition-opacity duration-2000 ease-in-out ${showPreviewBox ? 'opacity-100' : 'opacity-0'}`}>
            {showPreviewBox && <DesignPreviewBox />}
          </div>
        </div>
      </section>
    </main>
  );
}
