// @flow

import { action, observable } from 'mobx';
import ItemList from './models/ItemList';
import { persist } from 'mobx-persist';

export default class Invoice
{  
   @persist @observable currency: string = 'CAD';
   @persist @observable isPaid: boolean = false;
   @persist('object', ItemList) @observable itemList: ItemList = new ItemList();

   @action markPaid(): void
   {
      this.isPaid = true;
   }
}