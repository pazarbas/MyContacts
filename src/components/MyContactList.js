import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {contactsFetch} from '../actions';
import {FlatList} from 'react-native';
import ListItem from './ListItem';


class MyContactList extends Component {

    componentDidMount() {
        const {contactsFetch} = this.props
        contactsFetch();
    }

    render() {
        console.log(this.props)
        return(
            <FlatList
            data={this.props.contacts}
            renderItem={contact => <ListItem contact={contact.item} />}
            keyExtractor={contact => contact.uid}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const contacts = _.map(state.contactList,(val,uid)=> ({...val,uid}));
    return {contacts}
};

export default connect(mapStateToProps,{contactsFetch})(MyContactList);