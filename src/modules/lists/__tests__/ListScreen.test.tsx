import { render, renderHook, screen, waitFor } from '@testing-library/react-native';
import React from 'react';
import ListScreen from '../screens/ListScreen';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getListHook } from '../hooks/getList';
const queryClient = new QueryClient();
const wrapper = ({ children }: { children: JSX.Element }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('Testing List Page', () => {
  it('Should render properly', () => {
    const newQueryClient = new QueryClient();
    render(
      <QueryClientProvider client={newQueryClient}>
        <ListScreen />
      </QueryClientProvider>
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it('Should render the list of elements', async () => {
    const { result } = renderHook(() => getListHook(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
