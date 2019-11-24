import { types } from 'mobx-state-tree';
import ItemList from './ItemList';

const Invoice = types
   .model('Invoice', {
      currency: types.string,
      is_paid: false,
      itemList: types.optional(ItemList, {items: []})
   })
   .actions(self => ({
      markPaid(): void
      {
         self.is_paid = true;
      }
   }))
   .views(self => ({
      get status(): string
      {
         return self.is_paid ? "Paid": "Not Paid";
      }
   }));

export default Invoice;