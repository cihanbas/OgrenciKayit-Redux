import {combineReducers} from 'redux';
import kimlikDogrulsmsReducers from './KimlikDogrulamaReducers'
import StudentCreateReducers from './StudentCreateReducers';
import studentsDataReducers from './studentsDataReducers';
import StudentsUpdate from './StudentsUpdate';

export default combineReducers({
    kmResponse: kimlikDogrulsmsReducers,
    studentListResponse: StudentCreateReducers,
    studentsDataResponse: studentsDataReducers,
    StudentsUpdateResponse: StudentsUpdate
})