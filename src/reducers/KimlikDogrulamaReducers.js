import {
    EMAIL_CHANGED,
    PASSWOD_CHANGED,
    LOGIN_USER,
    LOGIN_SUCCESS
} from '../action/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    user: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWOD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: action.payload};
        case LOGIN_SUCCESS:
            return {...state, user: action.payload};
        default:
            return state;
    }
}