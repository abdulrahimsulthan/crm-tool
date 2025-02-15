import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="text-3xl">App</div>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
