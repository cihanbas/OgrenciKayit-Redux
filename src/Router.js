import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Platform, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

import LoginForm from './LoginForm';
import StudentList from './components/StudentList';
import StudentCreate from './components/StudentCreate';
import StudentsUpdate from './components/StudentsUpdate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{backgroundColor: '#e5efff', marginTop: Platform.OS === 'ios' ? 65 : 54}}>
            <Scene key='kimlik'>
                <Scene key='loginScreen' component={LoginForm} title="Giriş Ekranı"/>
            </Scene>
            <Scene key="main">
                <Scene
                    key='studentList'
                    component={StudentList}
                    title="Öğrenci Listesi"
                    rightTitle="Yeni"
                    onRight={() => Actions.studentCreate()}/>
                <Scene
                    key='studentCreate'
                    component={StudentCreate}
                    title="Oğreni Kayıt"
                />
                <Scene
                    key='studentUpdate'
                    component={StudentsUpdate}
                    title="Kayıt Güncelle"
                />
            </Scene>


        </Router>
    )
};
export default RouterComponent;