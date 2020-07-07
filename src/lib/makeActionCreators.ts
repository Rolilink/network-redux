// eslint-disable-next-line no-unused-vars
import { createAction, Action, ActionFunctionAny } from 'redux-actions';
import makeActions from './makeActions';

// eslint-disable-next-line max-len
const networkRequestPayloadCreator: ActionFunctionAny<INetworkRequest> = (request: INetworkRequest) => request;

const makeActionCreators = (namespace: string): Dictionary<ActionFunctionAny<Action<INetworkRequest>>> => {
  const actions = makeActions(namespace);

  return ({
    setNetworkRequest: createAction<INetworkRequest>(
      actions.SET_REQUEST,
      networkRequestPayloadCreator,
    ),
    unsetNetworkRequest: createAction<INetworkRequest>(
      actions.SET_REQUEST,
      networkRequestPayloadCreator,
    ),
    clearNetworkRequest: createAction<INetworkRequest>(
      actions.CLEAR_ALL_REQUESTS,
    ),
  });
};

export default makeActionCreators;
