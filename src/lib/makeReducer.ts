// eslint-disable-next-line no-unused-vars
import { handleActions, Action } from 'redux-actions';
import makeActions from './makeActions';

const initialState: Dictionary<INetworkRequest> = {};

const makeReducer = (namespace: string): Function => {
  const actions = makeActions(namespace);

  return handleActions<Dictionary<INetworkRequest>, INetworkRequest>(
    {
      [actions.SET_REQUEST]: (
        state: Dictionary<INetworkRequest>,
        action: Action<INetworkRequest>,
      ): Dictionary<INetworkRequest> => ({
        ...state,
        [action.payload.id]: action.payload,
      }),
      [actions.REMOVE_REQUEST]: (
        state: Dictionary<INetworkRequest>,
        action: Action<INetworkRequest>,
      ): Dictionary<INetworkRequest> => ({
        ...state,
        [action.payload.id]: action.payload,
      }),
      [actions.CLEAR_ALL_REQUESTS]: (): Dictionary<INetworkRequest> => initialState,
    },
    initialState,
  );
};

export default makeReducer;
