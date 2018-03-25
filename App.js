import React from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5xf8N9jSvDR7IPwM3tTYoP2yHPvFLjvE',
      authDomain: 'manager-24f28.firebaseapp.com',
      databaseURL: 'https://manager-24f28.firebaseio.com',
      projectId: 'manager-24f28',
      storageBucket: 'manager-24f28.appspot.com',
      messagingSenderId: '126727831771'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
