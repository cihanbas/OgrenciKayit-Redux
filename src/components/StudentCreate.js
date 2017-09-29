import React, {Component} from 'react';
import {Picker, View, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Button, Spinner, CardSection, Card} from './'
import {studentChanged} from '../action';

class StudentCreate extends Component {
    render() {
        const {inputStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="isim"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.isim}
                        onChangeText={isim => this.props.studentChanged({props: 'isim', value: isim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="SoyIsim"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChanged({props: 'soyisim', value: soyisim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="number"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.number}
                        onChangeText={number => this.props.studentChanged({props: 'number', value: number})}/>
                </CardSection>
                <CardSection>
                    <Picker
                        style={{flex: 1}}
                        selectValue={this.props.sube}
                        onValueChange={sube => this.props.studentChanged({props: 'sube', value: sube})}>
                        <Picker.Item label="A şubesi" value="asube"/>
                        <Picker.Item label="B şubesi" value="bsube"/>
                        <Picker.Item label="C şubesi" value="csube"/>
                        <Picker.Item label="D şubesi" value="dsube"/>
                        <Picker.Item label="E şubesi" value="esube"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Alert.alert("Hello Kitty")}>
                        Kaydet
                    </Button>
                </CardSection>
            </Card>
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

const mapToStateProps = ({studentListResponse}) => {
    const {isim, soyisim, number, sube} = studentListResponse;
    return {isim, soyisim, number, sube};
};

export default connect(mapToStateProps, {studentChanged})(StudentCreate);