import { types } from 'mobx-state-tree';

export const Item = types.model('Item', {
   quantity: types.number,
   price: types.number,
   name: types.string
});

// export const item = Item.create();