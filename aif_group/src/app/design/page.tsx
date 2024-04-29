import DesignHeader from '@/containers/design/DesignHeader';

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
