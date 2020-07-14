import { makeReduxNetwork } from '..';
import { INetworkRequest, NetworkRequestStatusEnum, NetworkRequestMethodsEnum } from '../types';

const requestA: INetworkRequest = {
  id: 'a',
  // eslint-disable-next-line no-undef
  status: NetworkRequestStatusEnum.IN_PROGRESS,
  // eslint-disable-next-line no-undef
  method: NetworkRequestMethodsEnum.GET,
  url: 'localhost:3000/fakeURL/a',
  startedAt: new Date(1594672653959),
};

const requestB: INetworkRequest = {
  id: 'b',
  // eslint-disable-next-line no-undef
  status: NetworkRequestStatusEnum.IN_PROGRESS,
  // eslint-disable-next-line no-undef
  method: NetworkRequestMethodsEnum.GET,
  url: 'localhost:3000/fakeURL/b',
  startedAt: new Date(1594672653959),
};

describe('makeReduxNetwork', () => {
  it('should return a redux duck', () => {
    const duck = makeReduxNetwork('organization');

    expect(duck.name).toBe('organization/network');
    expect(duck.reducer).toBeDefined();
    expect(duck.actions).toBeDefined();
    expect(duck.selectors).toBeDefined();
    expect(duck.caseReducers).toBeDefined();
  });
});

describe(('makeReduxNetwork.reducer'), () => {
  it('should be able to add a network request', () => {
    const { reducer, actions } = makeReduxNetwork('organization');

    const newState = reducer(undefined, actions.addNetworkRequest(requestA));

    expect(newState).toMatchSnapshot();
  });

  it('should be able to remove a network request', () => {
    const oldState = {
      entities: {
        [requestA.id]: requestA,
        [requestB.id]: requestB,
      },
      ids: [
        'a',
        'b',
      ],
    };
    const { reducer, actions } = makeReduxNetwork('organization');

    const newState = reducer(oldState, actions.removeNetworkRequest(requestA.id));

    expect(newState).toMatchSnapshot();
  });

  it('should be able to update a network request', () => {
    const oldState = {
      entities: {
        [requestA.id]: requestA,
      },
      ids: [
        'a',
      ],
    };
    const { reducer, actions } = makeReduxNetwork('organization');

    const newState = reducer(oldState, actions.updateNetworkRequest({
      id: requestA.id,
      changes: {
        status: NetworkRequestStatusEnum.SUCCESS,
      },
    }));

    expect(newState).toMatchSnapshot();
  });

  it('should be able to remove all network requests', () => {
    const oldState = {
      entities: {
        [requestA.id]: requestA,
        [requestB.id]: requestB,
      },
      ids: [
        'a',
        'b',
      ],
    };
    const { reducer, actions } = makeReduxNetwork('organization');

    const newState = reducer(oldState, actions.removeAllNetworkRequests());

    expect(newState).toMatchSnapshot();
  });
});
