import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {TypeIcon} from '../../../../components';

import styles from './move-row.style';

const MoveRow = ({move, onPressMove}) => {
  const {id, name, type} = move;

  return (
    <TouchableOpacity onPress={() => onPressMove(id)} style={styles.container}>
      <Text style={styles.name}> {name.replace('-', ' ')} </Text>
      <TypeIcon type={type} />
    </TouchableOpacity>
  );
};

MoveRow.defaultProps = {
  move: {},
};

MoveRow.propTypes = {
  move: PropTypes.object.isRequired,
  onPressMove: PropTypes.func.isRequired,
};

export {MoveRow};
