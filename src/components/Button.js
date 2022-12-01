import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../utils';
import TextView from './TextView';

const Button = ({style, type, label, disable, onPress}) => {
  //DEFAULT TYPE SUBMIT
  let backgroundColor = colors.button.submit.backgroundColor;
  let color = colors.button.submit.colors;
  let borderColor = colors.button.submit.borderColor;

  if (type == 'red') {
    backgroundColor = colors.button.secondary.backgroundColor;
    color = colors.button.secondary.colors;
    borderColor = colors.button.secondary.borderColor;
  }

  const Div = !disable ? TouchableOpacity : View;

  return (
    <Div
      style={[styles.container(backgroundColor, borderColor), style]}
      onPress={onPress}>
      <TextView style={styles.label(color)}>{label}</TextView>
    </Div>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, borderColor) => ({
    maxWidth: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
    borderColor,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  }),

  label: color => ({
    color,
    fontFamily: fonts.primary.bold,
  }),
});
