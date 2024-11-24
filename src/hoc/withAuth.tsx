// /src/hoc/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        const returnUrl = router.asPath;
        router.push(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // リダイレクトが完了するまで何もレンダリングしません
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
