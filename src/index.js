import React from 'react';
import ReactDOM from 'react-dom/client';
import L from 'leaflet';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './containers/app';
import 'antd/es/table/style/css';
import 'antd/es/select/style/css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(false);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);