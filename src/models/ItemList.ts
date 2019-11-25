import { types } from 'mobx-state-tree';
import { Item, ItemType } from './Item';

export const ItemList = types
   .model('ItemList', {
      items: types.array(Item)
   })
   .actions(self => ({
      add(item: ItemType)
      {
         self.items.push(item);
      }
   }));

export const itemList = ItemList.create();