import React , {Component} from 'react';
import {connect} from 'react-redux';
import {contactUpdate,contactCreate} from '../actions';
import {Card,CardSection,Button} from './common'
import ContactForm from './ContactForm'


class ContactCreate extends Component {
    onButtonPress() {
        const {name,phone,groups} = this.props;
        this.props.contactCreate({name,phone, groups : groups || 'General'});
    }

    render() {
        return (
           <Card>
               <ContactForm {...this.props}/>
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       Kaydet
                   </Button>
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name,phone,groups} = state.contactForm;
    return {name,phone,groups};
}



export default connect(mapStateToProps,{contactUpdate,contactCreate}) (ContactCreate);