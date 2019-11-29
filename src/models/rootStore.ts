import { types } from 'mobx-state-tree';
import { createContext } from 'react';
import { Invoice } from './Invoice';
import { persist } from 'mst-persist';

const RootStore = types
   .model('RootStore', {
      invoice: types.optional(Invoice, { currency: 'CAD' })
   });

export const rootStore = RootStore.create({ invoice: Invoice.create({ currency: 'CAD' }) });
export const rootStoreContext = createContext(rootStore);
export const invoiceContext = createContext(rootStore.invoice);

persist('rootStore', rootStore, {
   storage: localStorage,
   jsonify: true,
   whitelist: ['invoice']
 }).then(() => console.log('someStore has been hydrated'));