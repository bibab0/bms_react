import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import './assets/css/antdreset.css';
import './assets/css/index.css';
import App from './views/App/App';
import store from './store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
