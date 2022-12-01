import {Alert} from 'react-native';
import Toast from 'react-native-simple-toast';

export const ToastAlert = (message = 'Coming Soon') => {
  return Toast.show(message, Toast.SHORT);
};

export const SimpleAlert = (message = 'Coming Soon', onPress) => {
  onPress = onPress ? onPress : () => null;
  Alert.alert('', message, [{text: 'OK', onPress: () => onPress()}]);
};