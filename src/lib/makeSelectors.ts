import _ from 'lodash';

export const getNetworkState = (
  state: Dictionary<INetworkRequest>,
): Dictionary<INetworkRequest> => state;

export const getNetworkRequests = (
  state: Dictionary<INetworkRequest>,
): INetworkRequest[] => Object.keys(state).map((id: string) => state[id]);

export const getNetworkRequest = (
  state: Dictionary<INetworkRequest>,
  id: string,
): INetworkRequest => state[id];

export const getNetworkRequestWithStatus = (
  state: INetworkRequest[],
  status: NetworkRequestStatusEnum,
): INetworkRequest => (
  _.filter((request: INetworkRequest) => (
    request.status === status
  ))
);
