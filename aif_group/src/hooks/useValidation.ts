import { registerEmail } from '@/services/registerEmail';
import { setToken } from '@/services/setToken';
import { validateEmail } from '@/services/validateEmail';
import { useQuery } from '@tanstack/react-query';

function useValidation(email: string, status: string = 'user', password: string = '') {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['validateEmail', email],
    queryFn: async () => {
      const isValid = await validateEmail(email);
      if (isValid) {
        await registerEmail(email);
        await setToken(email, status, password);
      }
      return isValid;
    },
    enabled: false,
  });
  return { data, isLoading, refetch };
}

export default useValidation;
