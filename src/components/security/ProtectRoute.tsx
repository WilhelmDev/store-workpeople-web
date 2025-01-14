import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import routes from '@/utils/routes';
import { getUserToken } from '@/services/localstorage.service';

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = getUserToken();
      if (!token) {
        router.push(routes.login);
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    // Puedes mostrar un loader aquí mientras se verifica la autenticación
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
