import React, {useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text}) => {
  const [stateText, setStateText] = useState('Default state');

  const onTextPress = () => {
    setStateText('Updated state');
  };
  return (
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Hello World',
};

export default Title;
