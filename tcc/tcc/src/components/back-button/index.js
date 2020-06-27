import React from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BackButton = ({style, navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Icon
      style={style}
      name="keyboard-arrow-left"
      size={45}
      color={COLORS.WHITE}
      onPress={goBack}
    />
  );
};

BackButton.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export {BackButton};
