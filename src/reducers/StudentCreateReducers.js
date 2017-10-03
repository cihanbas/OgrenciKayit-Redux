import {STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SCCESS,STUDENT_LIST_DATA_SUCCESS,UPDATE_REQUEST,UPDATE_REQUEST_SCCESS} from '../action/types';

const INITIAL_STATE = {
    isim: '',
    soyisim: '',
    number: '',
    sube: 'asube',
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CHANGED:
            return {...state, [action.payload.props]: action.payload.value};
        case CREATE_REQUEST:
        case UPDATE_REQUEST:
            return {...state, loading: true};
        case CREATE_REQUEST_SCCESS:
        case UPDATE_REQUEST_SCCESS:
            return INITIAL_STATE;
        case STUDENT_LIST_DATA_SUCCESS:
            return {...state};
        default :
            return state;
    }
}