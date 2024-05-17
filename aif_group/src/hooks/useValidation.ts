import { registerEmail } from '@/services/registerEmail';
import { setToken } from '@/services/setToken';
import { validateEmail } from '@/services/validateEmail';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export interface ValidationArgs {
  email: string;
  status?: string;
  password?: string;
}

function useValidation() {
  const mutation = useMutation({
    mutationFn: async ({ email, status = 'user', password = '' }: ValidationArgs) => {
      const isValid = await validateEmail(email);
      if (isValid) {
        await registerEmail(email);
        await setToken(email, status, password);
      }
      return isValid;
    },
  });

  return mutation;
}

export default useValidation;
