import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to use the 'client' module
import App from './App';
import { UserProvider } from './utils/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
