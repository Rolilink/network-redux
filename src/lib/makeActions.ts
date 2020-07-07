interface INetworkActions {
  SET_REQUEST: string,
  REMOVE_REQUEST: string,
  CLEAR_ALL_REQUESTS: string,
}

const makeActions = (namespace: string): INetworkActions => ({
  SET_REQUEST: `${namespace}/network/SET_REQUEST`,
  REMOVE_REQUEST: `${namespace}/network/REMOVE_REQUEST`,
  CLEAR_ALL_REQUESTS: `${namespace}/network/CLEAR_ALL_REQUESTS`,
});

export default makeActions;
