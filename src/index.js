import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Invoice from './models/Invoice';
import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const invoice = Invoice.create({ currency: 'CAD' });

onPatch(invoice, patch => {
   console.log(patch);
});
makeInspectable(invoice);

ReactDOM.render(
   <Provider
   invoice={invoice}
   >
      <App/>
   </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
