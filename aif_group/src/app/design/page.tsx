'use client';
import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import InputAlert from '@/containers/modal/InputAlert';
import useShowBox from '@/hooks/useShowBox';

export default function Design() {
  const {
    handleCreateDesign,
    handleStartDesign,
    handleDesignSelection,
    show,
    isLoading,
    data,
    error,
    isCreateLoading,
  } = useShowBox();

  return (
    <main className="h-screen">
      <DesignHeader />
      <section
        className={`bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center ${show.alert && 'relative'}
        `}>
        {show.alert && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        <div className="flex space-x-7">
          <DesignStartBox onCreateDesign={handleCreateDesign} />
          <div
            className={`transition-opacity duration-1000 ease-in-out ${show.selectBox ? 'opacity-100' : 'opacity-0'}`}>
            {!isCreateLoading && show.selectBox && (
              <DesignSelectBox onSelectDesign={handleDesignSelection} data={data} error={error} />
            )}
          </div>
          {isCreateLoading && <DesignLoadingBox type={'select'} />}
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
