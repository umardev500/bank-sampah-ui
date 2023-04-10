import {colors} from 'constants/colors';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  iconW: number;
  iconH: number;
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

export const PaymentListing: React.FC<Props> = ({
  icon,
  iconW,
  iconH,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={{width: iconW, height: iconH}} source={icon} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Image source={require('assets/icons/arrow-right.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray.gray200,
    paddingBottom: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 16,
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Regular',
  },
});
