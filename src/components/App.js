
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
  const handleSubmit = (e) =>
  {
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;

    e.preventDefault();
    invoice.itemList.add({
      name: name,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price)
    });
    e.target.reset();
    e.target.name.focus();
  }

  return (
    <div className="App">
      <h1>{invoice.status}</h1>
      {! invoice.is_paid &&
        <button onClick={invoice.markPaid}>Pay</button>
      }

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" 
          id="name"/>
        </label>
        <label htmlFor="quantity">
          Quantity
          <input type="number" 
          id="quantity"/>
        </label>
        <label htmlFor="price">
          price
          <input type="text" 
          id="price"/>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default inject('invoice')(observer(App));
