import { getUsers } from '@/services/getUsers';
import { registerEmail } from '@/services/registerEmail';
import { setToken } from '@/services/setToken';
import { validateEmail } from '@/services/validateEmail';
import { useQuery } from '@tanstack/react-query';

function useValidation(email: string, status: string = 'user', password: string = '') {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['validateEmail', email],
    queryFn: async () => {
      const isValid = await validateEmail(email);
      if (isValid) {
        const isRegistered = await registerEmail(email);
        if (isRegistered) {
          await getUsers();
          await setToken(email, status, password);
        }
      }
      return isValid;
    },
    enabled: false,
  });
  return { data, isLoading, error, refetch };
}

export default useValidation;
