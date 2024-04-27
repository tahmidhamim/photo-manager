import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);