import { types, Instance } from 'mobx-state-tree';
import { Item, ItemType } from './Item';

export type ItemListType = Instance<typeof ItemList>;

export const ItemList = types
   .model('ItemList', {
      items: types.array(Item)
   })
   .actions(self => ({
      add(item: ItemType)
      {
         self.items.push(item);
      },
      remove(item: ItemType)
      {
         self.items.splice(self.items.indexOf(item), 1);
      }
   }))
   .views(self => ({
      get total()
      {
         return self.items.reduce((sum: number, item: ItemType) => sum + item.total, 0);
      }
   }));

export const itemList = ItemList.create();