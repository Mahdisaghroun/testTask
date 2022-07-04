import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  onPress: Function;
  disabled?: boolean;
};
const Button: React.FC<Props> = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
      disabled={disabled}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1C8EC9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#fff',
  },
});
