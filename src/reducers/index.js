import {combineReducers}
from 'redux';
import kimlikDogrulsmsReducers from './KimlikDogrulamaReducers'
import StudentCreateReducers from './StudentCreateReducers';
import studentsDataReducers from './studentsDataReducers';
export default combineReducers({
    kmResponse:kimlikDogrulsmsReducers,
    studentListResponse:StudentCreateReducers,
    studentsDataResponse:studentsDataReducers
})