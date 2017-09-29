import React, {Component} from 'react';
import {Platform, Text, View, TextInput,Alert} from 'react-native';
import {Button, Spinner, CardSection, Card} from './'

class StudentCreate extends Component {
    render() {
        const {inputStyle} = styles;
        return (
            <View>

                <CardSection>
                    <TextInput
                        placeholder="isim"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.isim}
                        onChangeText={isim => this.props.StudentChange(isim)}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="SoyIsim"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.SoyIsim}
                        onChangeText={SoyIsim => this.props.StudentChange(SoyIsim)}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="number"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.number}
                        onChangeText={number => this.props.StudentChange(number)}/>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>Alert.alert("Hello Kitty")}>
                        Kaydet
                    </Button>
                </CardSection>
            </View>

        )
    }
}

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }
};
export default StudentCreate;