import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const ReceiverInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('assets/avatars/avatar-2.png')}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Mark Schweinsteiger</Text>
        <Text style={styles.id}>99587262563</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 18,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  info: {
    gap: 8,
  },
  name: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
  id: {
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray400,
  },
});
