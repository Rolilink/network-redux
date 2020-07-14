# network-redux
A group of actions, reducers and selectors to handle networking on redux. Uses redux-toolkit.

## installation
```
yarn add @rolilink/redux-network
```
or
```
npm add @rolilink/redux-network
```

### usage
To generate the redux duck you will need to require `makeReduxNetwork`:

```
const { makeReduxNetwork } = require('@rolilink/redux-network');

makeReducer('organization');
```

This will return a duck object like this
```
{
  actions, // a object with the actions returned by redux-toolkit
  reducer, // the reducer function
  selectors, // an object with the selectors returned by redux-toolkit
  caseReducers, // an object with the case reducers returned by redux-toolkit
}
```
