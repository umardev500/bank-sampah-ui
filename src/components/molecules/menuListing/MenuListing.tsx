import {colors} from 'constants/colors';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const MenuListing: React.FC<Props> = ({
  source,
  text,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={source} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 54,
    backgroundColor: colors.gray.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Medium',
  },
});
