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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    handleRetryDesign,
    setShow,
  } = useShowBox();

  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const pathname = usePathname();

  // 모달이 떠있는 경우 바깥 스크롤 동작 막기
  useEffect(() => {
    if (pathname.includes('design/')) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [pathname]);

  return (
    <main className="w-full h-full bg-bg">
      <DesignHeader />
      <section className="bg-bg w-full min-w-fit min-h-[calc(100vh-8.875rem)] h-[calc(100%-8.875rem)] flex justify-center items-center relative">
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-row justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        {show.errorAlert2 && (
          <div className="absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center">
            <ErrorAlert2 onClose={() => setShow(prev => ({ ...prev, errorAlert2: false }))} />
          </div>
        )}

        <ul className="w-fit h-fit m-6 flex justify-center items-center flex-1 list-none relative">
          <ErrorAlert1 onClose={() => setShowErrorAlert1(false)} show={showErrorAlert1} />
          <ErrorAlert3 onClose={() => setShow(prev => ({ ...prev, errorAlert3: false }))} show={show.errorAlert3} />
          <li>
            <DesignStartBox
              onCreateDesign={handleCreateDesign}
              userInput={userInput}
              setUserInput={setUserInput}
              onError={() => setShowErrorAlert1(true)}
              disabled={isLoading.create || isLoading.select}
            />
          </li>
          <li className={`ml-5 select-box ${isCreateLoading ? 'box-display' : ''}`}>
            {(isCreateLoading || createMutation.isPending) && <DesignLoadingBox type={'select'} />}
          </li>
          {/* <li className={`select-box ${!isLoading.create && show.selectBox ? 'box-display' : ''}`}> */}
          {/* {!isCreateLoading && !createMutation.isPending && show.selectBox && ( */}
          <DesignSelectBox
            onSelectDesign={handleDesignSelection}
            onRetry={handleRetryDesign}
            data={data}
            error={error}
          />
          {/* )} */}
          {/* </li> */}
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
