// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import Provider from react-redux to provide the Redux store to the app
import { Provider } from 'react-redux';

// Import the Redux store from the store.js file
import store from './store.js';

// Wrap the App with Provider and pass the store so that Redux store is available globally
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
