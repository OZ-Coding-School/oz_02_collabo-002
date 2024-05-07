'use client';
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
    <main className="w-full h-full bg-bg">
      <DesignHeader />
      <section className="bg-bg w-fit h-[calc(100%-8.875rem)] flex justify-center items-center m-auto">
        {show.alert && (
          <div className="h-full absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-row justify-center items-center">
            <InputAlert onClose={handleStartDesign} />
          </div>
        )}
        <ul className="w-fit h-full m-auto px-5 flex justify-center items-center flex-1 list-none">
          <li>
            <DesignStartBox onCreateDesign={handleCreateDesign} />
          </li>
          <li className={`ml-5 select-box ${show.selectBox ? 'box-display' : ''}`}>
            {isLoading.create && show.selectBox && <DesignLoadingBox type={'select'} />}
          </li>
          <li className={`select-box ${show.selectBox ? 'box-display' : ''}`}>
            {!isLoading.create && show.selectBox && <DesignSelectBox onSelectDesign={handleDesignSelection} />}
          </li>
          <li className={`ml-5 select-box ${show.selectBox ? 'box-display' : ''}`}>
            {isLoading.select && show.selectBox && <DesignLoadingBox type={'preview'} />}
          </li>
          <li className={`select-box ${show.previewBox ? 'box-display' : ''}`}>
            {!isLoading.select && show.previewBox && <DesignPreviewBox />}
          </li>
        </ul>
      </section>
    </main>
  );
}
