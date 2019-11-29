// @flow

import React from 'react';
import type { Node } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores/rootStore';
import ItemModel from '../stores/models/Item';
import Item from './Item';

export default observer((): Node =>
{
  const { invoice } = rootStore;

  const handleSubmit = (e: any) =>
  {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;

    const itemModel = new ItemModel(name, parseInt(quantity, 10), parseFloat(price));

    invoice.itemList.add(itemModel);
    e.target.reset();
    e.target.name.focus();
  }

  return (
    <div className="App">
      <h1>{invoice.isPaid ? 'Paid' : 'Not Paid'}</h1>

      <button onClick={() => invoice.markPaid()}>Pay</button>


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

      <h2>Total is ${invoice.itemList.total.toFixed(2)}</h2>

      <ul>
        {invoice.itemList.items.map((item: Item, i: number) => (
          <Item item={item} itemList={invoice.itemList} key={i} />
        ))}
      </ul>
    </div>
  );
});