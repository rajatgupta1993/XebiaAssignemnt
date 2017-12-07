import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './src/js/reducers/index.js';
import { rootSaga } from './src/js/sagas/saga.js';
import createSagaMiddleware from 'redux-saga';
import Main from './main';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), autoRehydrate());
//persistStore(store, { storage: AsyncStorage });
sagaMiddleware.run(rootSaga);
export default class App extends React.Component {
  render() {
    return (
   <Provider store = {store}>
    <Main/>
   </Provider>
    );
  }
}

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
}; 
