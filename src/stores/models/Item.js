// @flow

import { observable, action, computed } from 'mobx';
import { IRemover } from '../interfaces/IRemover';

export default class Item
{
   constructor(parent: IRemover)
   {
      this.parent = parent;
   }

   @observable parent: IRemover;
   @observable quantity: number;
   @observable price: number;
   @observable name: number;

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