import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Text,Alert} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {CardSection} from './'
class ListItem extends Component{
   clickStudents(){
       console.log(this.props);
        Actions.studentUpdate({ogrenci:this.props.ogrenci})
    }
    render(){
        const {isim, soyisim} = this.props.ogrenci.val;
        return (
            <TouchableWithoutFeedback onPress={this.clickStudents.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {isim} {soyisim}
                        </Text>

                    </CardSection>
                </View>
            </TouchableWithoutFeedback>



        )
    }
}
export default ListItem;