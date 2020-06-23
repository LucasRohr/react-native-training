import {Alert} from 'react-native';

const createAlert = ({
  title,
  message,
  leftButtonConfig = {},
  rightButtonConfig = {},
}) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: leftButtonConfig.label,
        onPress: leftButtonConfig.onPress,
        style: leftButtonConfig.style,
      },
      {
        text: rightButtonConfig.label,
        onPress: rightButtonConfig.onPress,
        style: rightButtonConfig.style,
      },
    ],
    {
      cancelable: true,
    },
  );

export {createAlert};
