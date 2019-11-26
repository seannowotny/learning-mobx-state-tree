
import React, { useContext, SyntheticEvent } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import Item from './Item';
import { Item as ItemModel, ItemType } from '../models/Item';
import { rootStoreContext } from '../models/rootStore';

export default observer(() =>
{
  const rootStore = useContext(rootStoreContext);

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
    rootStore.invoice.itemList.add(itemModel);
    e.target.reset();
    e.target.name.focus();
  }

  return (
    <div className="App">
      <h1>{rootStore.invoice.status}</h1>
      {! rootStore.invoice.is_paid &&
        <button onClick={() => rootStore.invoice.markPaid()}>Pay</button>
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

      <h2>Total is ${rootStore.invoice.itemList.total.toFixed(2)}</h2>

      <ul>
        {rootStore.invoice.itemList.items.map((item: ItemType, i: number) => (
          <Item item={item} key={i} />
        ))}
      </ul>
    </div>
  );
});