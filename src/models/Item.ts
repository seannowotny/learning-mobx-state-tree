import { types, Instance } from 'mobx-state-tree';

export type ItemType = Instance<typeof Item>;

export const Item = types
   .model('Item', {
      quantity: types.number,
      price: types.number,
      name: types.string
   }).views(self => ({
      get total()
      {
         return self.quantity * self.price
      }
   }));

// export const item = Item.create();