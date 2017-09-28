import React from 'react';
import { View,StyleSheet } from 'react-native';

const CardSection = (props) => (
    <View  style={StyleSheet.flatten([styles.subContainerStyle, props.style])} >
      {props.children}
    </View>
  );


const styles = {
  subContainerStyle: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // borderColor: '#ddd',
    marginBottom: 5,
    position: 'relative'
  }
};
export  {CardSection};
