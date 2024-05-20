import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

function usePreventMoves() {
  const pathname = usePathname();
  const isClickedFirst = useRef(false);
  const isDirty = useRef(true);
  const router = useRouter();

  // 새로고침, 페이지 이동 막기
  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = true;
      }
    },
    [isDirty],
  );

  useEffect(() => {
    const originalPush = router.push;
    const newPush = (href: string, options?: NavigateOptions | undefined): void => {
      if (isDirty && href === '/' && !confirm('페이지를 나가시겠습니까? 변경사항이 저장되지 않을 수도 있습니다')) {
        return;
      }

      originalPush(href, options);
      return;
    };
    router.push = newPush;
    return () => {
      router.push = originalPush;
    };
  }, [isDirty, router, handleBeforeUnload]);

  // 뒤로가기 막기
  const handlePopState = useCallback(() => {
    if (isDirty && !confirm('페이지를 나가시겠습니까? 변경사항이 저장되지 않을 수도 있습니다')) {
      history.pushState(null, '', '');
      return;
    }

    history.back();
  }, [isDirty]);

  useEffect(() => {
    if (!isClickedFirst.current) {
      history.pushState(null, '', '');
      isClickedFirst.current = true;
    }
  }, []);

  useEffect(() => {
    if (!pathname.includes('design/')) {
      window.addEventListener('popstate', handlePopState);
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [handlePopState, handleBeforeUnload, pathname]);
}

export default usePreventMoves;
