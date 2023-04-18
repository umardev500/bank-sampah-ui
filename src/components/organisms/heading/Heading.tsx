import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Heading: React.FC = () => {
  return (
    <View style={styles.heading}>
      <View>
        <Text style={styles.hi}>Hi there!</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>

      <Image
        style={styles.avatar}
        source={require('assets/avatars/avatar-2.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  hi: {
    fontSize: 16,
    color: colors.gray.gray500,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gray.gray600,
  },
});
