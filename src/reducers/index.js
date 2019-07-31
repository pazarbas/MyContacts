import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ContactFormReducer from './ContactFormReducer'
import ContactListReducer from './ContactListReducer'

export default combineReducers({
    auth:AuthReducer,
    contactForm : ContactFormReducer,
    contactList : ContactListReducer
});