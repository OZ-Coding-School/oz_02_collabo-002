import DesignHeader from '@/containers/design/DesignHeader';
import FeedbackPopup from '@/containers/modal/FeedbackPopup';
import FormModal from '@/containers/modal/FormModal';

export default function Design() {
  return (
    <main className="h-screen">
      <DesignHeader />
      <section className="bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center">
        <div>
          <div>디자인 페이지</div>
        </div>
      </section>
    </main>
  );
}
