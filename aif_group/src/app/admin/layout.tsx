import Header from '@/containers/admin/Header';
import React from 'react';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-bg h-full">
      <Header />
      {children}
    </section>
  );
}

export default AdminLayout;
