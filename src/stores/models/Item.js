// @flow

import { observable, action, computed } from 'mobx';
import { IRemover } from '../interfaces/IRemover';

type params = {
   parent: IRemover, 
   name: string, 
   quantity: number, 
   price: number
}

export default class Item
{
   constructor({parent, name, quantity, price}: params)
   {
      this.parent = parent;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
   }

   @observable parent: IRemover;
   @observable quantity: number;
   @observable price: number;
   @observable name: string;

   @action increment = () => this.quantity++;

   @action decrement = () => this.quantity--;

   @action destroy()
   {
      this.parent.remove(this);
   }

   @computed get total()
   {
      return this.quantity * this.price;
   }
}