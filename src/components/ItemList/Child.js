import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';
import ModalDialog from '../Modal';
import TextView from '../TextView';

const Child = ({data}) => {
  const [visible, setVisible] = useState(false);
  const [desc, setDesc] = useState('');

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setDesc(data?.joke);
          setVisible(true);
        }}>
        <TextView>{data?.joke}</TextView>
      </TouchableOpacity>

      <ModalDialog
        visible={visible}
        desc={desc}
        onDismiss={() => setVisible(false)}
      />
    </>
  );
};

export default Child;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 16,
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
});
