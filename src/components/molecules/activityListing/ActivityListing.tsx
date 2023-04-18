import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ActivityListing: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.thumb}
          source={require('assets/thumbs/thumb.png')}
        />
        <View style={styles.detail}>
          <View>
            <Text style={styles.title}>Kardus, dan lainnya</Text>
          </View>
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryText}>Paket akan diambil pada</Text>
            <Text style={styles.deliveryTime}>Hari ini, 14:20</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Icon
          style={styles.dots}
          name="dots-vertical"
          size={18}
          color={colors.gray.gray400}
        />
      </TouchableOpacity>
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
  },
  inner: {
    flex: 1,
    gap: 16,
    flexDirection: 'row',
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
    fontFamily: 'Roboto-Medium',
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
  dots: {
    marginLeft: 6,
    marginRight: -4,
    marginTop: 2,
  },
});
