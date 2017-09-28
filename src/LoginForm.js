import React, {Component} from 'react';
import {TextInput, Alert} from 'react-native';
import fireabase from 'firebase';

import {Button, Spinner, CardSection, Card} from './components'
import {EmailChanged,PasswordChanged} from './action';
import {connect} from 'react-redux'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        };
    }

    clickLogin() {
        this.setState({loading: true});
        console.log(this.state.loading);
        const {email, password} = this.state;
        if (email === '' || password === '') {
            this.setState({loading: false});
            Alert.alert('Mesaj', 'İlgili Alanları boş geçmeyin ', [
                {
                    text: 'tamam',
                    onPress: () => console.log('Tamam')
                }
            ]);
        } else {
            fireabase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(this.loginSucces.bind(this))
                .catch(() => {
                    fireabase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(this.loginSucces.bind(this))
                        .catch(this.loginFail.bind(this));
                });
        }

    }

    loginFail() {
        this.setState({loading: false});
        Alert.alert('Mesaj', 'kullanıcı Adı ve ya şifre  hatalı', [
            {
                text: 'tamam',
                onPress: () => console.log('Tamam')
            }
        ]);
    }

    loginSucces() {
        this.setState({loading: false});
    }

    renderButton() {
        if (!this.state.loading) {
            return (
                <Button onPress={this
                    .clickLogin
                    .bind(this)}>
                    Giriş
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
                        placeholder="E-mail"
                        style={inputStyle}
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={email => this.props.EmailChanged(email)}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={password => this.props.PasswordChanged(password)}/>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
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
const mapStateToProps=({kimlikDogrulamaResponse})=>{
    const {email,password}=kimlikDogrulamaResponse;
    return {email,password}
};
export default connect(mapStateToProps(),{EmailChanged,PasswordChanged})(LoginForm)