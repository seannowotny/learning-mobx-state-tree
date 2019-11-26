// @flow

import { action, observable } from 'mobx';
import ItemList from './models/Items';
// import { RootStore } from './rootStore';

export default class Invoice
{
   // constructor(rootStore: RootStore)
   // {
   //    this.rootStore = rootStore;
   // }

   // rootStore: RootStore;
   
   @observable currency: string = 'CAD';
   @observable isPaid: boolean;
   @observable items: ItemList;

   @action markPaid(): void
   {
      this.isPaid = true;
   }
}