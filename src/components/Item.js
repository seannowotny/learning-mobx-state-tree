// @flow

import React from 'react';
import type { Node } from 'react';
import { observer } from 'mobx-react-lite';
import Item from '../stores/models/Item';
import ItemList from '../stores/models/ItemList';

type Props = {
  item: Item,
  itemList: ItemList
};

export default observer(({ item, itemList }: Props): Node => 
  <li>
    {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item.total.toFixed(2)}
    <button onClick={() => item.decrement()}>-</button>
    <button onClick={() => item.increment()}>+</button>
    <button onClick={() => itemList.remove(item)}>x</button>
  </li>
);