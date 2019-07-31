import {
    CONTACT_UPDATE,
    CONTACT_CREATE,
    CONTACT_SAVED_SUCCESS
}from '../actions/types';

const INITIAL_STATE = {
    name:'',
    phone:'',
    groups:''
};

export default (state = INITIAL_STATE ,action)=> {
    switch(action.type){
        case CONTACT_CREATE:
            return INITIAL_STATE;
        case CONTACT_UPDATE:
            return {...state,[action.payload.prop]:action.payload.value}
        case CONTACT_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}