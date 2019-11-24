// @flow

import React from 'react';
import './App.css';
import Invoice from '../models/Invoice';
import { observer, inject } from 'mobx-react';

import type { Node } from 'react';

type InvoiceType = typeof(Invoice);
type PropTypes = { 
  invoice: InvoiceType 
};

function App({ invoice }: PropTypes): Node 
{
  return (
    <div className="App">
      <h1>{invoice.status}</h1>
      {! invoice.is_paid &&
        <button onClick={invoice.markPaid}>Pay</button>
      }
    </div>
  );
}

export default inject('invoice')(observer(App));
