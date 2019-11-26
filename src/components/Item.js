// @flow

import React from 'react';
// import  { ItemType } from '../models/Item';
import { observer } from 'mobx-react-lite';

// type Props =
// {
//   item: ItemType
// }

export default observer(({ item }: Props) => 
  <li>
    {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item.total.toFixed(2)}
    <button onClick={() => item.decrement()}>-</button>
    <button onClick={() => item.increment()}>+</button>
    <button onClick={() => item.destroy()}>x</button>
  </li>
);