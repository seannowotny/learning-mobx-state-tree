import { types, Instance, getParent, cast } from 'mobx-state-tree';
import { ItemList, ItemListType } from './ItemList';

export type ItemType = Instance<typeof Item>;

export const Item = types
   .model('Item', {
      quantity: types.number,
      price: types.number,
      name: types.string
   })
   .actions(self => ({
      increment()
      {
         self.quantity = self.quantity + 1;
      },
      decrement()
      {
         self.quantity = self.quantity - 1;
      },
      destroy()
      {
         const itemList = getParent<ItemListType>(self, 2);
         itemList.remove(cast(self));
      }
   }))
   .views(self => ({
      get total()
      {
         return self.quantity * self.price
      }
   }));