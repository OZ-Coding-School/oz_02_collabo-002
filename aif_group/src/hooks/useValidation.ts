import { validateEmail } from '@/services/validateEmail';
import { useQuery } from '@tanstack/react-query';

function useValidation(email: string) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['validateEmail', email],
    queryFn: () => validateEmail(email),
    enabled: false,
  });
  return { data, isLoading, error, refetch };
}

export default useValidation;
