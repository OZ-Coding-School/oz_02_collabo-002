'use client';
import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import ErrorAlert1 from '@/containers/modal/ErrorAlert1';
import ErrorAlert2 from '@/containers/modal/ErrorAlert2';
import InputAlert from '@/containers/modal/InputAlert';
import useShowBox from '@/hooks/useShowBox';
import { useState } from 'react';

export default function Design() {
  const {
    userInput,
    setUserInput,
    handleCreateDesign,
    handleStartDesign,
    handleDesignSelection,
    show,
    isLoading,
    data,
    error,
    isCreateLoading,
    createMutation,
  } = useShowBox();

  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const [showErrorAlert2, setShowErrorAlert2] = useState(false);

  const handleRetryDesign = () => {
    setShowErrorAlert2(true); // ErrorAlert2를 표시
  };

  return (
    <main className="w-full h-full bg-bg">
      <DesignHeader />
      <section className="bg-bg w-fit h-[calc(100%-8.875rem)] flex justify-center items-center m-auto">
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
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
            userInput={userInput}
            setUserInput={setUserInput}
            onError={() => setShowErrorAlert1(true)}
            disabled={showErrorAlert1}
          />
          <div
            className={`transition-opacity duration-1000 ease-in-out ${show.selectBox ? 'opacity-100' : 'opacity-0'}`}>
            {!isCreateLoading && !createMutation.isPending && show.selectBox && (
              <DesignSelectBox
                onSelectDesign={handleDesignSelection}
                onRetry={handleRetryDesign}
                data={data}
                error={error}
              />
            )}
          </div>
          {(isCreateLoading || createMutation.isPending) && <DesignLoadingBox type={'select'} />}
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
