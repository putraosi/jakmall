import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

const LoadingModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ActivityIndicator size={'large'} color={colors.primary} />
        <Text style={styles.label}>{'Loading...'}</Text>
      </View>
    </View>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor.modal,
  },

  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 16,
  },

  label: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.primary.regular,
    marginTop: 12,
  },
});
