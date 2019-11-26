// @flow

import { observable } from 'mobx';

import Invoice from './Invoice';

export class RootStore
{
   @observable invoice: Invoice = new Invoice(/*this*/);
}

export const rootStore = new RootStore();