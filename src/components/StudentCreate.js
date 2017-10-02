import React, {Component} from 'react';
import {Picker, View, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Button, Spinner, CardSection, Card} from './'
import {studentChanged, studentCreate} from '../action';

class StudentCreate extends Component {

    clickSave() {
        const {isim, soyisim, number, sube} = this.props;
        this.props.studentCreate({isim, soyisim, number, sube});
    }

    renderButton() {
        if (!this.props.loading) {
            return (
                <Button onPress={() => this.clickSave()}>
                    Kaydet
                </Button>
            );
        }
        return <Spinner size='large'/>;
    }

    render() {
        const {inputStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="isim"
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.isim}
                        onChangeText={isim => this.props.studentChanged({props: 'isim', value: isim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="SoyIsim"
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChanged({props: 'soyisim', value: soyisim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="number"
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.number}
                        onChangeText={number => this.props.studentChanged({props: 'number', value: number})}/>
                </CardSection>
                <CardSection>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChanged({props: 'sube', value: sube})}>
                        <Picker.Item label="A şubesi" value="asube"/>
                        <Picker.Item label="B şubesi" value="bsube"/>
                        <Picker.Item label="C şubesi" value="csube"/>
                        <Picker.Item label="D şubesi" value="dsube"/>
                        <Picker.Item label="E şubesi" value="esube"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
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
    const {isim, soyisim, number, sube, loading} = studentListResponse;
    return {isim, soyisim, number, sube, loading};
};

export default connect(mapToStateProps, {studentChanged, studentCreate})(StudentCreate);