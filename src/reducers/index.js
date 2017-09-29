import {combineReducers}
from 'redux';
import kimlikDogrulsmsReducers from './KimlikDogrulamaReducers'
import StudentListReducers from './StudentListReducers';
export default combineReducers({
    kmResponse:kimlikDogrulsmsReducers,
    studentListResponse:StudentListReducers
})