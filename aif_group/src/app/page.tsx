'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import ReactModal from 'react-modal';

export default function Home() {
  useEffect(() => {
    ReactModal.setAppElement('#modal-root');
  }, []);

  return (
    <div>
      <Link href={'/admin'}>
        <p>admin</p>
      </Link>
    </div>
  );
}
