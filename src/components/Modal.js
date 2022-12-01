import React from 'react';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../utils';
import TextView from './TextView';

const ModalDialog = ({visible, desc, onDismiss}) => {
  const showDesc = desc ? true : false;
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}
      transparent>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={onDismiss}>
        <TouchableOpacity
          style={styles.content}
          activeOpacity={1}
          onPress={() => null}>
          {showDesc && <TextView>{desc}</TextView>}

          <TextView style={styles.button} onPress={onDismiss}>
            {'Ok'}
          </TextView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor.modal,
  },

  content: {
    backgroundColor: colors.white,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },

  button: {
    color: colors.primary,
    textAlign: 'right',
    marginRight: 16,
    marginTop: 16,
    fontFamily: fonts.primary.bold,
  },
});
