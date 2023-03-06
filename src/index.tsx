import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './Context/userContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <BrowserRouter basename='/Dashboard-Hotel-Miranda'>
          <App />
        </BrowserRouter>
      </Provider>
    </UserProvider >
  </React.StrictMode>

);


