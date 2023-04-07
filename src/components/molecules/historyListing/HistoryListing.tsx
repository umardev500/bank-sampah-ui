import {colors} from 'constants/colors';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

interface Props {
  item: {
    name: string;
    price: string;
    photo: ImageSourcePropType;
  };
}

export const HistoryListing: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      {/* Left side */}
      <View style={styles.left}>
        <Image style={styles.image} source={item.photo} />
      </View>

      {/* Right */}
      <View style={styles.right}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>08:25 Payment complete</Text>
        </View>
        <Text style={styles.price}>+ Rp{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: colors.gray.gray200,
  },
  info: {
    gap: 4,
  },
  name: {
    fontSize: 16,
    color: colors.gray.gray500,
    fontWeight: '500',
  },
  time: {
    color: colors.gray.gray400,
  },
  desc: {
    color: colors.gray.gray400,
  },
  price: {
    fontSize: 16,
    color: colors.green.green600,
    fontWeight: '500',
  },
});
