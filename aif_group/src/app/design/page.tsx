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
import useCheckWidth from '@/hooks/useCheckWidth';
import useShowBox from '@/hooks/useShowBox';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Design() {
  const {
    userInput,
    setUserInput,
    handleCreateDesign,
    handleStartDesign,
    handleDesignSelection,
    show,
    isLoading,
    createdImages: data,
    disable,
    handleRetryDesign,
    setShow,
    setDisable,
  } = useShowBox();

  const [showErrorAlert1, setShowErrorAlert1] = useState(false);
  const pathname = usePathname();
  const innerWidth = useCheckWidth();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 모달이 떠있는 경우 바깥 스크롤 동작 막기
  useEffect(() => {
    if (pathname.includes('design/')) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [pathname]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    }
  }, [isLoading, show]);

  return (
    <main className="bg-bg">
      <DesignHeader />
      <section className="bg-bg w-full min-h-[calc(100vh-8.875rem)] h-[calc(100%-8.875rem)] flex justify-center items-center relative md:min-h-[calc(100vh-6rem)] sm:min-h-screen sm:h-full xm:min-w-full">
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-row justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        {show.errorAlert2 && (
          <div className="absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center">
            <ErrorAlert2
              onClose={() => setShow(prev => ({ ...prev, errorAlert2: false }))}
              setDisable={() => setDisable(false)}
            />
          </div>
        )}
        <ErrorAlert1 onClose={() => setShowErrorAlert1(false)} show={showErrorAlert1} />
        <ErrorAlert3 onClose={() => setShow(prev => ({ ...prev, errorAlert3: false }))} show={show.errorAlert3} />

        <div
          ref={scrollRef}
          className="w-fit h-full flex items-center space-x-4 list-none p-6 xm:p-0 xm:w-full overflow-y-auto">
          {innerWidth < 490 ? (
            show.startBox &&
            !isLoading.create &&
            !isLoading.select &&
            !disable &&
            !show.previewBox && (
              <DesignStartBox
                onCreateDesign={handleCreateDesign}
                userInput={userInput}
                setUserInput={setUserInput}
                onError={() => setShowErrorAlert1(true)}
                disabled={isLoading.create || isLoading.select || disable}
              />
            )
          ) : (
            <DesignStartBox
              onCreateDesign={handleCreateDesign}
              userInput={userInput}
              setUserInput={setUserInput}
              onError={() => setShowErrorAlert1(true)}
              disabled={isLoading.create || isLoading.select || disable}
            />
          )}
          {innerWidth < 490
            ? isLoading.create && disable && <DesignLoadingBox type={'select'} />
            : isLoading.create && <DesignLoadingBox type={'select'} />}
          {innerWidth < 490
            ? !isLoading.create &&
              show.selectBox &&
              disable &&
              !isLoading.select &&
              !show.previewBox && (
                <DesignSelectBox onSelectDesign={handleDesignSelection} onRetry={handleRetryDesign} data={data} />
              )
            : !isLoading.create &&
              show.selectBox && (
                <DesignSelectBox onSelectDesign={handleDesignSelection} onRetry={handleRetryDesign} data={data} />
              )}
          {isLoading.select && <DesignLoadingBox type={'preview'} />}
          {innerWidth < 490
            ? !isLoading.select &&
              show.previewBox &&
              !show.selectBox && (
                <DesignPreviewBox goBack={() => setShow(prev => ({ ...prev, selectBox: true, previewBox: false }))} />
              )
            : !isLoading.select &&
              show.previewBox && (
                <DesignPreviewBox goBack={() => setShow(prev => ({ ...prev, selectBox: true, previewBox: false }))} />
              )}
        </div>
      </section>
    </main>
  );
}
