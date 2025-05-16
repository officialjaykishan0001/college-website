import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@radix-ui/themes/styles.css";
import "leaflet/dist/leaflet.css";
import { Theme } from "@radix-ui/themes";
import store from './redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
const persister = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="mint" grayColor="gray" radius="large" scaling="95%">
      <Provider store={store} >
        <PersistGate loading={null} persistor={persister} >
          <App />
        </PersistGate>
      </Provider>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
