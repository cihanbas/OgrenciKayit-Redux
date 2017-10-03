import React, {Component} from 'react';
import {View, Text, ListView, TouchableWithoutFeedback, Alert} from 'react-native';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {studentList} from '../action';
import {Card, CardSection, Button} from './';
import ListItem from './ListItem';

class StudentList extends Component {
    componentWillMount() {
        this.props.studentList();
        this.createList(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createList(nextProps);
    }

    createList({studentsArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(studentsArray);
    };

    // sayHello() {
    //     Alert.alert("dsfsdfsf");
    //     console.log("hello Kity");
    //     // Actions.studentCreate()
    // }

    RenderRow(ogrenci) {
        return (
            <ListItem
                ogrenci={ogrenci.val}
            />



        )
    }

    render() {

        // console.log("this.props "+this.props.studentsArray);/
        return (
            <Card>
                <ListView
                    enableEmptySection
                    dataSource={this.dataSource}
                    renderRow={this.RenderRow}
                />

            </Card>
        )
    }
}

const mapStateTo = ({studentsDataResponse}) => {

    const studentsArray = _.map(studentsDataResponse, (val, uid) => {
        return {val, uid};
    });
    return {studentsArray};
};
export default connect(mapStateTo, {studentList})(StudentList);