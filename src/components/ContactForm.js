import React ,{Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {contactUpdate} from '../actions';
import {CardSection, Input} from './common'

class ContactForm extends Component {
    render() {
        return(
            <View>
            <CardSection>
                   <Input
                    
                    label="İsim"
                    placeholder="John Doe"
                    value = {this.props.name}
                    onChangeText={text => this.props.contactUpdate({prop:'name',value:text})}
                   />
               </CardSection>
               <CardSection>
               <Input
                    label="Telefon"
                    placeholder="0(532) 222 22 22"
                    value = {this.props.phone}
                    onChangeText={text => this.props.contactUpdate({prop:'phone',value:text})}
                   />
               </CardSection>
               <CardSection style={{flexDirection:'column'}}>
                <Text style={styles.pickerTextStyle} >Grup Seç</Text>
                <Picker 
                style={{flex:1}}
                selectedValue={this.props.groups}
                onValueChange={value=> this.props.contactUpdate({prop:'groups',value})}
              >
                  <Picker.Item label="Genel" value="General"/>
                  <Picker.Item label="Arkadaşlar" value="Friends"/>
                  <Picker.Item label="İş" value="Work"/>
                  <Picker.Item label="Aile" value="Family"/>
                  <Picker.Item label="Spor" value="Fitness"/>
                  <Picker.Item label="Yoga" value="Yoga"/>
              </Picker>
               </CardSection>              
            </View>
        )
    }
}

const styles = {
    pickerTextStyle : {
        fontSize : 18,
        paddingLeft :20,
    }
    

};

const mapStateToProps = (state) => {
    const {name,phone,groups} = state.contactForm;
    return {name,phone,groups};
}
export default connect(mapStateToProps,{contactUpdate}) (ContactForm);