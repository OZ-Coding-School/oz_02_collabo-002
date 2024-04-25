import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignStartBox from '@/containers/design/DesignStartBox';
import ErrorAlert1 from '@/containers/modal/ErrorAlert1';
import ErrorAlert2 from '@/containers/modal/ErrorAlert2';
import ErrorAlert3 from '@/containers/modal/ErrorAlert3';
import FinalBox from '@/containers/design/FinalBox';
import InputAlert from '@/containers/modal/InputAlert';
import Image from 'next/image';
import ImageSample from '@/containers/modal/ImageSample';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {/* <DesignStartBox /> */}
      {/* <DesignLoadingBox /> */}
      {/* <DesignPreviewBox /> */}
      {/* <ErrorAlert1 /> */}
      {/* <ErrorAlert2 /> */}
      {/* <ErrorAlert3 /> */}
      {/* <InputAlert /> */}
      {/* <FinalBox /> */}
      {/* <DesignHeader /> */}
      <ImageSample />
    </div>
  );
}
