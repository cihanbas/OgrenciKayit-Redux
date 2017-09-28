import React, {Component} from 'react';
import {TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Button, Spinner, CardSection, Card} from './components'
import {EmailChanged, PasswordChanged,LoginUser} from './action';

class LoginForm extends Component {
    clickLogin() {

        const {email, password} = this.props;
        console.log(this.props);
       this.props.LoginUser({email,password});

    }


    renderButton() {
        if (!this.props.loading) {
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
        console.log(" this Email " + this.props.email);
        console.log("  this.props.password" + this.props.password);
        const {inputStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="E-mail"
                        style={inputStyle}
                        value={this.props.email}
                        underlineColorAndroid='transparent'
                        onChangeText={email => this.props.EmailChanged(email)}/>
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        style={inputStyle}
                        underlineColorAndroid='transparent'
                        value={this.props.password}
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
const mapStateToProps = ({kmResponse}) => {
    const {email, password,loading} = kmResponse;
    return {email, password,loading};
};
export default connect(mapStateToProps, {EmailChanged, PasswordChanged,LoginUser})(LoginForm)