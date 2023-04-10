import {colors} from 'constants/colors';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

export const TopUpListing: React.FC<Props> = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image style={styles.icon} source={icon} />
      <View style={styles.itemRight}>
        <Text style={styles.title}>{title}</Text>
        <Image source={require('assets/icons/arrow-right.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    gap: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 44,
    height: 44,
  },
  itemRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 24,
    paddingTop: 24,
    borderBottomColor: colors.gray.gray200,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray500,
  },
});
