import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
