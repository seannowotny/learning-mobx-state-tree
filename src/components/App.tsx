
import React, { useContext, SyntheticEvent } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import Item from './Item';
import { Item as ItemModel, ItemType } from '../models/Item';
import { invoiceContext } from '../models/rootStore';

export default observer(() =>
{
  const invoiceState = useContext(invoiceContext);

  const handleSubmit = (e: any) =>
  {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;

    const itemModel = ItemModel.create({
      name: name,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price)
    });
    invoiceState.itemList.add(itemModel);
    e.target.reset();
    e.target.name.focus();
  }

  return (
    <div className="App">
      <h1>{invoiceState.status}</h1>
      {! invoiceState.is_paid &&
        <button onClick={() => invoiceState.markPaid()}>Pay</button>
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

      <h2>Total is ${invoiceState.itemList.total.toFixed(2)}</h2>

      <ul>
        {invoiceState.itemList.items.map((item: ItemType, i: number) => (
          <Item item={item} key={i} />
        ))}
      </ul>
    </div>
  );
});