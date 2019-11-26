// @flow

import remotedev from 'mobx-remotedev';

import { observable } from 'mobx';

import Invoice from './Invoice';

@remotedev class RootStoreClass
{
   @observable invoice: Invoice = new Invoice(/*this*/);
}

export const RootStore = RootStoreClass;

export const rootStore = new RootStore();


// export class RootStore
// {
//    @observable invoice: Invoice = new Invoice(/*this*/);
// }

// export const rootStore = remotedev(new RootStore());