import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../utils';

const Container = ({
  backgroundColor = colors.backgroundColor.primary,
  children,
  statusbarColor = colors.header.primary,
}) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container(statusbarColor)} />
      <SafeAreaView
        style={[
          styles.content,
          {
            backgroundColor: backgroundColor,
          },
        ]}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    flex: 0,
    backgroundColor,
  }),

  content: {
    flex: 1,
  },
});
