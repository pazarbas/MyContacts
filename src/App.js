import React , {Component} from 'react';
import {Provider} from 'react-redux';
import {View , Text} from 'react-native';
import firebase from 'firebase'
import {createStore , applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    UNSAFE_componentWillMount(){
        const config = {
                apiKey: 'AIzaSyCnTW7YPXk2J2NJzgYXzEKlMuVOM9kTcTA',
                authDomain: 'nice-way-e0489.firebaseapp.com',
                databaseURL: 'https://nice-way-e0489.firebaseio.com',
                projectId: 'nice-way-e0489',
                storageBucket: '',
                messagingSenderId: '734820383705',
                appId: '1:734820383705:web:0dc9d1a2a6a65614'
              }

    firebase.initializeApp(config);
    }

    render() {
       
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
            <Router/>
            </Provider>
        );
    }
}
export default App;