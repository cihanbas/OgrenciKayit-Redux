import {combineReducers}
from 'redux';
import kimlikDogrulsmsReducers from './KimlikDogrulamaReducers'
export default combineReducers({
    kmResponse:kimlikDogrulsmsReducers
})