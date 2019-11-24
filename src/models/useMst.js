import React, { useContext, forwardRef } from 'react';
import { types } from 'mobx-state-tree';

const MSTContext = React.createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

export function useMst(mapStateToProps) {
  const store = useContext(MSTContext);

  if (typeof mapStateToProps !== 'undefined') 
  {
    return mapStateToProps(store);
  }

  return store;
}

const RootStore = types.model({
  count: 0,
}).actions(self => ({
  inc() {
    self.count += 1;
  }
}));

const rootStore = RootStore.create({});

// in root component

return (
  <Provider value={rootStore}>
    <Counter />
  </Provider>
);

// somewhere in the app

function Counter() {
  const { count, inc } = useMst(store => ({
    count: store.count,
    inc: store.inc,
  }));

  return (
    <div>
      value: {count}
      <button onClick={inc}>Inc</button>
    </div>
  );
}