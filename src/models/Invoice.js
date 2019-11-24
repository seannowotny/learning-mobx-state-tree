
import { types } from 'mobx-state-tree';
import ItemList from './ItemList';

type InvoiceType = {
   currency: string,
   is_paid: boolean,
   status: string,
   itemList: any,
   markPaid: () => void,
};

const Invoice: InvoiceType = types
   .model('Invoice', {
      currency: types.string,
      is_paid: false,
      itemList: types.optional(ItemList, {items: []})
   })
   .actions((self: InvoiceType) => ({
      markPaid(): void
      {
         self.is_paid = true;
      }
   }))
   .views((self: InvoiceType) => ({
      get status(): string
      {
         return self.is_paid ? "Paid": "Not Paid";
      }
   }));

export default Invoice;