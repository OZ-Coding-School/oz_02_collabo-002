import DesignLoadingBox from '@/containers/DesignLoadingBox';
import DesignPreviewBox from '@/containers/DesignPreviewBox';
import DesignStartBox from '@/containers/DesignStartBox';
import ErrorAlert1 from '@/containers/ErrorAlert1';
import ErrorAlert2 from '@/containers/ErrorAlert2';
import ErrorAlert3 from '@/containers/ErrorAlert3';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {/* <DesignStartBox /> */}
      {/* <DesignLoadingBox /> */}
      {/* <DesignPreviewBox /> */}
      {/* <ErrorAlert1 /> */}
      <ErrorAlert2 />
      {/* <ErrorAlert3 /> */}
    </div>
  );
}
