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
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

export const Listing: React.FC<Props> = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={[styles.icon]} source={icon} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name="keyboard-arrow-right"
          size={24}
          color={colors.gray.gray500}
        />
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    resizeMode: 'contain',
    maxWidth: '100%',
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
