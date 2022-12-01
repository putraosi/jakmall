import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcDown, IcUp} from '../../assets';
import {colors, fonts} from '../../utils';
import Button from '../Button';
import TextView from '../TextView';
import Child from './Child';

const ItemList = ({data, position, onPress, onReset, onAddMore}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <TextView style={styles.position}>{position}</TextView>
        <TextView style={styles.title}>{data?.title}</TextView>

        <Button
          style={styles.button}
          type={position == 1 ? '' : 'red'}
          label={position == 1 ? 'Top' : 'Go Top'}
          onPress={() => onReset()}
        />

        {data?.show ? <IcUp /> : <IcDown />}
      </TouchableOpacity>
      {data?.show && (
        <>
          {data.child.map((item, index) => (
            <Child key={index} data={item} />
          ))}

          {data?.child.length < 4 && (
            <TextView style={styles.showMore} onPress={() => onAddMore()}>
              {'Add more data'}
            </TextView>
          )}
        </>
      )}
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 8,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.backgroundColor.secondary,
    borderRadius: 8,
  },

  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.primary.medium,
    fontSize: 18,
  },

  showMore: {
    flex: 1,
    padding: 8,
    backgroundColor: colors.primary,
    textAlign: 'center',
    color: colors.white,
  },

  button: {
    marginHorizontal: 16,
  },
});
