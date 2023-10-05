import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

Title.defaultProps = {
  text: '',
};

export default Title;
