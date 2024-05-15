import { getUsers } from '@/services/getUsers';
import { registerEmail } from '@/services/registerEmail';
import { setToken } from '@/services/setToken';
import { validateEmail } from '@/services/validateEmail';
import { finduser } from '@/utils/findUser';
import { useQuery } from '@tanstack/react-query';

function useValidation(email: string, status: string = 'user', password: string = '') {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['validateEmail', email],
    queryFn: async () => {
      const isValid = await validateEmail(email);
      //await getUsers();
      if (isValid) {
        // if (!finduser(email, users)) {
        //   await registerEmail(email);
        await setToken(email, status, password);
        // }
      }
      return true;
    },
    enabled: false,
  });
  return { data, isLoading, error, refetch };
}

export default useValidation;
