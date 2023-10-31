import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { client } from './graphql/queries';
import { store } from './store';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import App from './App';

import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <App />
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);
