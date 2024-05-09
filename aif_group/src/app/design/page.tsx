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
  } = useShowBox();

  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const [showErrorAlert2, setShowErrorAlert2] = useState(false);

  const handleRetryDesign = () => {
    setShowErrorAlert2(true); // ErrorAlert2를 표시
  };

  return (
    <main className="w-full h-full bg-bg">
      <DesignHeader />
      <section className="bg-bg w-full min-w-fit h-[calc(100%-8.875rem)] flex justify-center items-center relative">
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-row justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}

        {showErrorAlert2 && (
          <div className="absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center">
            <ErrorAlert2 onClose={() => setShowErrorAlert2(false)} />
          </div>
        )}

        <ul className="w-fit h-full m-auto px-5 flex justify-center items-center flex-1 list-none relative">
          {showErrorAlert1 && (
            <div className="absolute top-0 mt-5 transform -translate-y-full z-30">
              <ErrorAlert1 onClose={() => setShowErrorAlert1(false)} show={showErrorAlert1} />
            </div>
          )}
          <li>
            <DesignStartBox
              onCreateDesign={handleCreateDesign}
              userInput={userInput}
              setUserInput={setUserInput}
              onError={() => setShowErrorAlert1(true)}
              disabled={showErrorAlert1}
            />
          </li>
          <li className={`ml-5 select-box ${isCreateLoading ? 'box-display' : ''}`}>
            {isCreateLoading && <DesignLoadingBox type={'select'} />}
          </li>
          <li className={`select-box ${!isLoading.create && show.selectBox ? 'box-display' : ''}`}>
            {!isLoading.create && show.selectBox && (
              <DesignSelectBox
                onSelectDesign={handleDesignSelection}
                onRetry={handleRetryDesign}
                data={data}
                error={error}
              />
            )}
          </li>
          <li className={`ml-5 select-box ${isLoading.select ? 'box-display' : ''}`}>
            {isLoading.select && <DesignLoadingBox type={'preview'} />}
          </li>
          <li className={`select-box ${show.previewBox ? 'box-display' : ''}`}>
            {!isLoading.select && show.previewBox && <DesignPreviewBox />}
          </li>
        </ul>
      </section>
    </main>
  );
}
