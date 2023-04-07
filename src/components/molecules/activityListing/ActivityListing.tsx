import {colors} from 'constants/colors';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ActivityListing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumb} source={require('assets/thumbs/thumb.png')} />
      <View style={styles.detail}>
        <View>
          <Text style={styles.title}>Kardus, dan lainnya</Text>
        </View>
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryText}>Paket akan diambil pada</Text>
          <Text style={styles.deliveryTime}>Hari ini, 14:20</Text>
        </View>
      </View>
      <Image source={require('assets/icons/dots-vertical-dark.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray.gray100,
    flexDirection: 'row',
    gap: 16,
  },
  thumb: {
    borderRadius: 8,
    width: 90,
    height: 90,
  },
  detail: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray.gray600,
  },
  deliveryInfo: {
    gap: 2,
  },
  deliveryText: {
    color: colors.gray.gray500,
  },
  deliveryTime: {
    fontSize: 12,
    color: colors.gray.gray400,
  },
});
