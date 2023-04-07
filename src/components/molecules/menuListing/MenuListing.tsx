import {colors} from 'constants/colors';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  source: ImageSourcePropType;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const MenuListing: React.FC<Props> = ({
  source,
  text,
  containerStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={source} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 54,
    backgroundColor: colors.gray.gray50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: colors.gray.gray600,
  },
});
