import DesignSelectBox from '@/containers/design/DesignSelectBox';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Link href={'/admin'}>
        <p>admin</p>
      </Link>
    </div>
  );
}
