import {
  createEntityAdapter,
  createSlice,
  IdSelector,
  Comparer,
  CaseReducers,
  EntityState,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import { INetworkRequest } from './types';

interface IEntityAdapterOptions<T> {
  selectID?: IdSelector<T> | undefined,
  sortComparer?: Comparer<T> | undefined,
}

const makeReduxNetwork = (
  namespace: string,
  options?: IEntityAdapterOptions<INetworkRequest>,
  // eslint-disable-next-line max-len
  extraReducers?: CaseReducers<EntityState<INetworkRequest>, any> | ((builder: ActionReducerMapBuilder<EntityState<INetworkRequest>>) => void) | undefined,
) => {
  const networkEntityAdapter = createEntityAdapter<INetworkRequest>(options || {});

  const networkSlice = createSlice({
    name: `${namespace}/network`,
    initialState: networkEntityAdapter.getInitialState(),
    reducers: {
      addNetworkRequest: networkEntityAdapter.addOne,
      addNetworkRequests: networkEntityAdapter.addMany,
      updateNetworkRequest: networkEntityAdapter.updateOne,
      updateNetworkRequests: networkEntityAdapter.updateMany,
      upsertNetworkRequest: networkEntityAdapter.upsertOne,
      upsertNetworkRequests: networkEntityAdapter.upsertMany,
      removeNetworkRequest: networkEntityAdapter.removeOne,
      removeNetworkRequests: networkEntityAdapter.removeMany,
      removeAllNetworkRequests: networkEntityAdapter.removeAll,
    },
    extraReducers,
  });

  return {
    name: networkSlice.name,
    reducer: networkSlice.reducer,
    actions: networkSlice.actions,
    selectors: {
      ...networkEntityAdapter.getSelectors(),
    },
    caseReducers: networkSlice.caseReducers,
  };
};

export {
  makeReduxNetwork,
};
