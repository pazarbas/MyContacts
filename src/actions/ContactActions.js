import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
    CONTACT_UPDATE,
    CONTACT_CREATE,
    CONTACTS_FETCH_SUCCESS,
    CONTACT_SAVED_SUCCESS,
    CONTACT_DELETED
} from './types'


export const contactUpdate = ({prop,value})=> {
    return{
        type: CONTACT_UPDATE,
        payload : { prop, value }
    };
};

export const contactCreate = ({name,phone,groups}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts`)
        .push({name,phone,groups}).then(()=> {
            dispatch({type:CONTACT_CREATE});
            Actions.pop() 
        })
    }
}

export const contactsFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts`)
        .on('value',snapshot => {
            dispatch({type:CONTACTS_FETCH_SUCCESS,payload:snapshot.val()});
        });
    }
};

export const contactEdit = ({name,phone,groups,uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts/${uid}`)
        .set({name,phone,groups})
        .then(()=> {
            dispatch({type:CONTACT_SAVED_SUCCESS})
            Actions.pop();
        })
    }
};

export const contactDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
return () => {
    firebase.database().ref(`/users/${currentUser.uid}/contacts/${uid}`)
    .remove()
    .then(()=>{
        Actions.pop();
    })
}
}