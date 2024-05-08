'use client';
import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import ErrorAlert1 from '@/containers/modal/ErrorAlert1';
import ErrorAlert2 from '@/containers/modal/ErrorAlert2';
import ErrorAlert3 from '@/containers/modal/ErrorAlert3';
import InputAlert from '@/containers/modal/InputAlert';
import useShowBox from '@/hooks/useShowBox';
import { useState } from 'react';

export default function Design() {
  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const [designCreateCount, setDesignCreateCount] = useState(0);

  const { handleCreateDesign, handleStartDesign, handleDesignSelection, handleRetryDesign, show, isLoading, setShow } =
    useShowBox();

  const confirmRetryDesign = () => {
    if (designCreateCount < 2) {
      setDesignCreateCount(prev => prev + 1);
      setShow(prev => ({ ...prev, errorAlert2: false }));
    } else {
      setShow(prev => ({ ...prev, errorAlert3: true }));
    }
  };

  return (
    <main className="h-screen">
      <DesignHeader />
      <section
        className={`bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center ${show.alert && 'relative'}
        `}>
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        {show.errorAlert2 && (
          <div className="absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center">
            <ErrorAlert2 onClose={() => setShow(prev => ({ ...prev, errorAlert2: false }))} />
          </div>
        )}
        {show.errorAlert3 && <ErrorAlert3 onClose={() => setShow(prev => ({ ...prev, errorAlert3: false }))} />}
        <div className="flex relative z-10 justify-center">
          {showErrorAlert1 && (
            <div className="absolute top-0 mt-5 transform -translate-y-full z-30">
              <ErrorAlert1 onClose={() => setShowErrorAlert1(false)} show={showErrorAlert1} />
            </div>
          )}
          <DesignStartBox
            onCreateDesign={handleCreateDesign}
            onError={() => setShowErrorAlert1(true)}
            disabled={isLoading.create || isLoading.select}
          />
          <div
            className={`transition-opacity duration-1000 ease-in-out ${show.selectBox ? 'opacity-100' : 'opacity-0'}`}>
            {!isLoading.create && show.selectBox && (
              <DesignSelectBox onSelectDesign={handleDesignSelection} onRetry={handleRetryDesign} />
            )}
          </div>
          {isLoading.create && <DesignLoadingBox type={'select'} />}
          {isLoading.select && <DesignLoadingBox type={'preview'} />}
          <div
            className={`transition-opacity duration-1000 ease-in-out ${show.previewBox ? 'opacity-100' : 'opacity-0'}`}>
            {!isLoading.select && show.previewBox && <DesignPreviewBox />}
          </div>
        </div>
      </section>
    </main>
  );
}
