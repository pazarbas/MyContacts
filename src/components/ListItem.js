import React ,{Component} from 'react';
import {Text,TouchableWithoutFeedback,View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';




class ListItem extends Component {
    onRowPress() {
        Actions.contactEdit({contact:this.props.contact});
    }   

    render() {
        const {name} = this.props.contact;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleSize}>
                        {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleSize : {
        fontSize: 18,
        paddingLeft :15
    }
}
export default ListItem;