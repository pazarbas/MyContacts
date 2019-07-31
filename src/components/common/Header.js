import React from 'react';
import {
    Text,View
} from 'react-native'

const Header = (props) => {
    const {textStyle,viewStyle} = styles;
    
    return (
        <View style= {viewStyle}>
           <Text style = {textStyle}>{props.headerText}</Text> 
        </View>
    );
};

const styles = {
   viewStyle : {
        backgroundColor:'#007aff',
        justifyContent:'center',
        alignItems:'center',
        height:100,
        paddingTop:50,
        shadowColor:'#000',
        shadowOffset: {widht:0,height:2},
        shadowOpacity:0.6,
        elevation:2,
        position: 'relative'      
   },
    textStyle : {
        fontSize : 20,
        color:'white',
        fontWeight:'700'
    }
}

export {Header};