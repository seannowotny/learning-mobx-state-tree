// @flow

import { observable, action, computed } from 'mobx';
import { persist } from 'mobx-persist';

export default class Item
{
   constructor(name: string, quantity: number, price: number)
   {
      if(name && quantity && price)
      {
         this.name = name;
         this.quantity = quantity;
         this.price = price;
      }
   }

   @persist @observable quantity: number;
   @persist @observable price: number;
   @persist @observable name: string;

   @action increment = () => this.quantity++;

   @action decrement = () => this.quantity--;

   @computed get total()
   {
      return this.quantity * this.price;
   }
}