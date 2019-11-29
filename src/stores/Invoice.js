// @flow

import { action, observable } from 'mobx';
import ItemList from './models/ItemList';
import { RootStore } from './rootStore';
import { persist } from 'mobx-persist';

export default class Invoice
{
   // constructor(rootStore: RootStore)
   // {
   //    this.rootStore = rootStore;
   // }

   // @observable rootStore: RootStore;
   
   @persist @observable currency: string = 'CAD';
   @persist @observable isPaid: boolean = false;
   @persist('object', ItemList) @observable itemList: ItemList = new ItemList();

   @action markPaid(): void
   {
      this.isPaid = true;
   }
}