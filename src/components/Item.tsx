import React from 'react';
import { ItemType } from '../models/Item';

interface Props
{
  item: ItemType
}

export const Item = ({ item }: Props) =>
{
  return (
    <li>
      {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item.total.toFixed(2)}
    </li>
  );
};

