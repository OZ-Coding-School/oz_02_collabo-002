import { postValidation } from '@/services/postValidation';
import { useQuery } from '@tanstack/react-query';

// function useValidation() {
//   const { isLoading, error, refetch } = useQuery({
//     queryKey: ['postValidation', email],
//     queryFn: async () => {
//       try {
//         const res = await postValidation(email);
//         console.log(res);
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     enabled: false,
//   });
//   return { isLoading, error, refetch };
// }

// export default useValidation;
