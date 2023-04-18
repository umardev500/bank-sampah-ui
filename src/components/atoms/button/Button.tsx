import { colors } from 'constants/colors';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  opacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
  onPress?: () => void;
}

export const Button: React.FC<Props> = ({
  text,
  opacity = 0.5,
  containerStyle,
  textStyle,
  color,
  onPress,
}) => {
  const hasColor = color !== undefined && color !== '';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      style={[styles.root, containerStyle]}>
      <Text style={[styles.text, hasColor ? { color: color } : {}, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.primary,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Roboto-Medium',
  },
});
