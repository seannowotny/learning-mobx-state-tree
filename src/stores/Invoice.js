// @flow

import { action, observable } from 'mobx';
import ItemList from './models/ItemList';
// import { RootStore } from './rootStore';

export default class Invoice
{
   // constructor(rootStore: RootStore)
   // {
   //    this.rootStore = rootStore;
   // }

   @observable rootStore: RootStore;
   
   @observable currency: string = 'CAD';
   @observable isPaid: boolean = false;
   @observable itemList: ItemList = new ItemList();

   @action markPaid(): void
   {
      this.isPaid = true;
   }
}