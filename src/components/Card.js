import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => (
    <View  style={StyleSheet.flatten([styles.containerStyle, props.style])}>
        {props.children}
    </View>
);


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddcdd5',
        borderBottomWidth: 0,
        elevation: 1}
};
export { Card};
