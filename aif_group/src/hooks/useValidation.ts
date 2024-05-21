import { registerEmail } from '@/services/registerEmail';
import { setToken } from '@/services/setToken';
import { validateEmail } from '@/services/validateEmail';
import { useMutation } from '@tanstack/react-query';

export interface ValidationArgs {
  email: string;
  status?: string;
  password?: string;
}

function useValidation() {
  const mutation = useMutation({
    mutationFn: async ({ email, status = 'user', password = '' }: ValidationArgs) => {
      const isValid = await validateEmail(email);
      const hasToken = await setToken(email, status, password);

      return isValid || hasToken;
    },
  });

  return mutation;
}

export default useValidation;
