import DesignHeader from '@/containers/design/DesignHeader';

export default function Design() {
  return (
    <main className="h-screen">
      <DesignHeader />
      <section className="bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center items-center">
        <div className="w-full flex flex-row justify-around items-center"></div>
      </section>
    </main>
  );
}
