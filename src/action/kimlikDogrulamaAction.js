import {Alert} from 'react-native';
import fireabase from 'firebase';
import {EMAIL_CHANGED, PASSWOD_CHANGED, LOGIN_USER,LOGIN_SUCCESS} from './types';

export const EmailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        })
    }
};

export const PasswordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWOD_CHANGED,
            payload: password
        })
    }
};
export const LoginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            payload: true
        });
        if (email === '' || password === '') {
            Alert.alert('Mesaj', 'İlgili Alanları boş geçmeyin ', [
                {
                    text: 'tamam',
                    onPress: () => {
                        dispatch({
                            type: LOGIN_USER,
                            payload: false
                        });
                    }
                }
            ]);

        } else {
            fireabase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user=>LoginSucces(dispatch,user))
                .catch(() => {
                    fireabase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(user=>LoginSucces(dispatch,user))
                        .catch(()=>LoginFail(dispatch));
                });
        }

        }

};
const LoginSucces = (dispatch,user) => {

    Alert.alert("Login Success");
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    dispatch({
        type: LOGIN_USER,
        payload: false
    });
    console.log(user)


};
const LoginFail = (dispatch) => {
    Alert.alert('Mesaj', 'kullanıcı Adı ve ya şifre  hatalı', [
        {
            text: 'tamam',
            onPress: () => {
                dispatch({
                    type: LOGIN_USER,
                    payload: false
                })
            }
        }
    ]);
};