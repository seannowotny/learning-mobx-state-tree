// @flow

import { createContext } from 'react';
import { observable } from 'mobx';

import Invoice from './Invoice';

export class RootStore
{
   @observable invoice = new Invoice(/*this*/);
}

const rootStore = new RootStore();
export const rootStoreContext = createContext<RootStore>(rootStore);