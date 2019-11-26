import { types } from 'mobx-state-tree';
import { createContext } from 'react';
import { Invoice } from './Invoice';

const RootStore = types
   .model('RootStore', {
      invoice: types.optional(Invoice, { currency: 'CAD' })
   });

export const rootStore = RootStore.create({ invoice: Invoice.create({ currency: 'CAD' }) });
export const rootStoreContext = createContext(rootStore);
export const invoiceContext = createContext(rootStore.invoice);