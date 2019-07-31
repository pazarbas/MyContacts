import _ from 'lodash';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import ContactForm from './ContactForm';
import {contactUpdate,contactEdit,contactDelete} from '../actions'
import {Card, CardSection,Button,Confirm} from './common'
import Communications from 'react-native-communications'



class ContactEdit extends Component {
state = {showModal : false}
UNSAFE_componentWillMount(){
 _.each(this.props.contact,(value,prop) => {
    this.props.contactUpdate({prop,value});
 });
}
onButtonPress() {
    const {name,phone,groups} = this.props;
    this.props.contactEdit({name,phone,groups,uid:this.props.contact.uid});
}

onTextPress() {
    const {phone} = this.props;
    Communications.text(phone,`Selam`);
}
onCallPress() {
    const {phone} = this.props;
    Communications.phonecall(phone,true);
}
onDecline(){
this.setState({showModal:false})
}
onAccept(){
const {uid} = this.props.contact
this.props.contactDelete({uid});

}

    render() {
        return (
            <Card>
                <ContactForm/>
                <CardSection>
                    <Button onPress={this.onCallPress.bind(this)}>
                        Ara
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Mesaj Gönder
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      Değişikleri  Kaydet
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=> this.setState({showModal:!this.state.showModal})}>
                      Sil
                    </Button>
                </CardSection>
                <Confirm 
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    İletişimi silmek istediğinize emin misiniz?
                </Confirm>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const {name,phone,groups} = state.contactForm
    return {name,phone,groups};
}
export default connect(mapStateToProps,{contactUpdate,contactEdit,contactDelete})(ContactEdit);