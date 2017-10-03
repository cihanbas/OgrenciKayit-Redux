import React, {Component} from 'react';
import {Picker, View, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Button, Spinner, CardSection, Card} from './'
import {studentChanged, studentCreate,studentUpdate,studentDelete} from '../action';

class StudentsUpdate extends Component {
    state = {
        isim: '', soyisim: '', number: '', sube: ''
    };
    componentWillMount(){

        const {isim, soyisim, number, sube} = this.props.ogrenci.val;
        this.setState({
            isim, soyisim, number, sube
        })
    }

    clickUpdate() {
        const {isim, soyisim, number, sube} = this.state;
        this.props.studentUpdate({isim, soyisim, number, sube,uid:this.props.ogrenci.uid});
    }
   clickDelete() {
        this.props.studentDelete({uid:this.props.ogrenci.uid});
    }

    renderButton() {
        if (!this.props.loadingUpdate) {
            return (
                <Button onPress={() => this.clickUpdate()}>
                    Güncelle
                </Button>
            );
        }
        return <Spinner size='large'/>;
    }
    renderDeleteButton() {
        if (!this.props.loadingDelete) {
            return (
                <Button onPress={() => this.clickDelete()}>
                    Sil
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
                        value={this.state.isim}
                        onChangeText={isim => this.setState({isim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="SoyIsim"
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.state.soyisim}
                        onChangeText={soyisim => this.setState({soyisim})}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="number"
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.state.number}
                        onChangeText={number => this.setState({number})}/>
                </CardSection>
                <CardSection>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.state.sube}
                        onValueChange={sube => this.setState({sube})}>
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
                <CardSection>
                    {this.renderDeleteButton()}
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

const mapToStateProps = ({StudentsUpdateResponse}) => {
    const {loadingUpdate,loadingDelete} = StudentsUpdateResponse;
    return { loadingUpdate,loadingDelete};
};

export default connect(mapToStateProps, {studentChanged, studentCreate,studentUpdate,studentDelete})(StudentsUpdate);