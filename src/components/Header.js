import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fonts, HEIGHT_HEADER} from '../utils';
import TextView from './TextView';

const Header = ({title}) => {
  let backgroundColor = colors.primary;
  let color = colors.white;

  return (
    <View style={styles.container(backgroundColor)}>
      <TextView style={styles.title(color)}>{title}</TextView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    width: '100%',
    height: HEIGHT_HEADER,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    backgroundColor,
  }),

  title: color => ({
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color,
    textAlign: 'center',
  }),
});
