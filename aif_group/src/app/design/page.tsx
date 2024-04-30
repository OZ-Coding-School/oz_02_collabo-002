'use client';

import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
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
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
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
        <div className="flex space-x-10 opacity-100 transition-opacity duration-300">
          <DesignStartBox onCreateDesign={handleCreateDesign} />
          {!isLoading && showSelectBox && <DesignSelectBox onSelectDesign={handleDesignSelection} />}
          {isLoading && <DesignLoadingBox />}
          {!isLoading && showPreviewBox && <DesignPreviewBox />}
        </div>
      </section>
    </main>
  );
}
