import React , {Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';
import {emailChanged ,passwordChanged,loginUser} from '../actions'
import {Card,CardSection , Input, Button, Spinner} from './common'

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    renderError(){
        if(this.props.error){
            return(
                <View>
                    <Text style={styles.errorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton() { 
        if(this.props.loading){
            return <Spinner size="large"/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Giriş Yap
            </Button> 
        );
    }

    render() {
        return(
            <Card>
                    <CardSection>
                       <Input 
                       label="E-Posta"
                       placeholder="kullanici@jotform.com"
                       onChangeText={this.onEmailChange.bind(this)}
                       value={this.props.email}
                       />
                    </CardSection>
                    <CardSection>
                    <Input 
                      secureTextEntry
                       label="Şifre"
                       placeholder="123456"
                       onChangeText={this.onPasswordChange.bind(this)}
                       value={this.props.password}
                       />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                      {this.renderButton()}
                    </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
};

export default connect(mapStateToProps,{
    emailChanged,
    passwordChanged,
    loginUser})(LoginForm);
const styles ={
    errorStyle : {
        fontSize : 20 ,
        alignSelf:'center',
        color:'red'
    }
}