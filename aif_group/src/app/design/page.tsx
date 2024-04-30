import DesignHeader from '@/containers/design/DesignHeader';
import DesignLoadingBox from '@/containers/design/DesignLoadingBox';
import DesignPreviewBox from '@/containers/design/DesignPreviewBox';
import DesignSelectBox from '@/containers/design/DesignSelectBox';
import DesignStartBox from '@/containers/design/DesignStartBox';

export default function Design() {
  return (
    <main className="h-screen">
      <DesignHeader />
      <section className="bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center">
        <div className="w-full flex flex-row justify-around items-center">
          {/* <DesignStartBox /> */}
          {/* <DesignLoadingBox /> */}
          {/* <DesignSelectBox /> */}
          <DesignPreviewBox />
        </div>
      </section>
    </main>
  );
}
