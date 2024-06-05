import { Provider } from 'react-redux';
import MainStack from './navigator/main';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupStore } from './redux/store';
const App = () => {
  const queryClient = new QueryClient();
  const store = setupStore();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
