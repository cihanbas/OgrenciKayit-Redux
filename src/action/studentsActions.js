import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
import {STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SCCESS,STUDENT_LIST_DATA_SUCCESS} from './types';

export const studentChanged = ({props, value}) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: {props, value}
        })
    }
};
export const studentCreate = ({isim, soyisim, number, sube}) => {
    const {currentUser} = firebase.auth();
    console.log(currentUser);
    return (dispatch) => {
        dispatch({
            type: CREATE_REQUEST
        });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`).push({
            isim,
            soyisim,
            number,
            sube
        }).then(() => {
                dispatch({
                    type: CREATE_REQUEST_SCCESS
                });
                Actions.pop();
            }
        )
    }
};
export const studentList=()=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`).on('value',snapshot=>{
            dispatch({
                type:STUDENT_LIST_DATA_SUCCESS,
                payload:snapshot.val()
            })
        })
    }
}