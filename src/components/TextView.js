import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { colors, fonts } from '../utils';

const TextView = ({style, numberOfLines, children, onPress}) => {
  return (
    <Text
      style={[styles.label, style]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default TextView;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary.regular,
  },
});
