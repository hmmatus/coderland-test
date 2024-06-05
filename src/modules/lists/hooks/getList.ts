import { useQuery } from '@tanstack/react-query';
export function getListHook() {
  return useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
      return response.json();
    },
  });
}
