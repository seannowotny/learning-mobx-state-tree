// @flow

import { observable } from 'mobx';
import { create, persist } from 'mobx-persist';

import Invoice from './Invoice';

export class RootStore
{
   @persist('object', Invoice) @observable invoice: Invoice = new Invoice(/*this*/);
}

export const rootStore = new RootStore();

const hydrate = create({
   storage: localStorage,
   jsonify: true
});

hydrate('rootStore', rootStore).then(() => console.log('rootStore has been hydrated'));