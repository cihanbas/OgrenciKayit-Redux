import {STUDENT_LIST_DATA_SUCCESS } from '../action/types';
import {Alert} from 'react-native';
const INITIAL_STATE = {
    data: '',

};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_LIST_DATA_SUCCESS:
            return action.payload;
        default :
            return state;
    }
}