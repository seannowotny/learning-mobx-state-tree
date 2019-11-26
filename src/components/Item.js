// @flow

import React from 'react';
import { observer } from 'mobx-react-lite';
import Item from '../stores/models/Item';

type Props = {
  item: Item
};

export default observer(({ item }: Props) => 
  <li>
    {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item.total.toFixed(2)}
    <button onClick={() => item.decrement()}>-</button>
    <button onClick={() => item.increment()}>+</button>
    <button onClick={() => item.destroy()}>x</button>
  </li>
);