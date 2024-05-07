'use client';

import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import ErrorAlert1 from '@/containers/modal/ErrorAlert1';
import ErrorAlert2 from '@/containers/modal/ErrorAlert2';
import InputAlert from '@/containers/modal/InputAlert';
import { useState } from 'react';

export default function Design() {
  const [showAlert, setShowAlert] = useState(true);
  const [showSelectBox, setShowSelectBox] = useState(true);
  const [showPreviewBox, setShowPreviewBox] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const [showErrorAlert2, setShowErrorAlert2] = useState(false);

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
    if (!showPreviewBox) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const handleRetryDesign = () => {
    setShowErrorAlert2(true); // ErrorAlert2를 표시
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
        {showErrorAlert2 && (
          <div className="absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center">
            <ErrorAlert2 onClose={() => setShowErrorAlert2(false)} />
          </div>
        )}
        <div className="flex space-x-7 relative z-10 justify-center">
          {showErrorAlert1 && (
            <div className="absolute top-0 mt-5 transform -translate-y-full z-30">
              <ErrorAlert1 onClose={() => setShowErrorAlert1(false)} show={showErrorAlert1} />
            </div>
          )}
          <DesignStartBox
            onCreateDesign={handleCreateDesign}
            onError={() => setShowErrorAlert1(true)}
            disabled={showErrorAlert1}
          />
          <div
            className={`transition-opacity duration-1000 ease-in-out ${showSelectBox ? 'opacity-100' : 'opacity-0'}`}>
            {showSelectBox && <DesignSelectBox onSelectDesign={handleDesignSelection} onRetry={handleRetryDesign} />}
          </div>
          <div
            className={`transition-opacity duration-1000 ease-in-out ${showPreviewBox ? 'opacity-100' : 'opacity-0'}`}>
            {showPreviewBox && <DesignPreviewBox />}
          </div>
        </div>
      </section>
    </main>
  );
}
