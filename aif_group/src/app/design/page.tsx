import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import InputAlert from '@/containers/modal/InputAlert';
import useShowBox from '@/hooks/useShowBox';

export default function Design() {
  const { handleCreateDesign, handleStartDesign, handleDesignSelection, show, isLoading } = useShowBox();

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
        <div className="flex space-x-10 opacity-100 transition-opacity duration-300">
          <DesignStartBox onCreateDesign={handleCreateDesign} />
          {!isLoading.create && show.selectBox && <DesignSelectBox onSelectDesign={handleDesignSelection} />}
          {isLoading.create && <DesignLoadingBox type={'select'} />}
          {isLoading.select && <DesignLoadingBox type={'preview'} />}
          {!isLoading.select && show.previewBox && <DesignPreviewBox />}
        </div>
      </section>
    </main>
  );
}
