import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  name: 'transfer' | 'received' | 'pln' | 'credit';
  status: 'read' | 'unread';
  nextStatus: 'read' | 'unread';
  onPress?: () => void;
}

export const NotificationListing: React.FC<Props> = ({
  name,
  status,
  nextStatus,
  onPress,
}) => {
  let src = require('assets/icons/transfer-notif.png');
  switch (name) {
    case 'credit':
      src = require('assets/icons/credit-notif.png');
      break;

    case 'received':
      src = require('assets/icons/receive-notif.png');
      break;

    case 'pln':
      src = require('assets/icons/pln-notif.png');
      break;

    case 'transfer':
      src = require('assets/icons/transfer-notif.png');
      break;
  }
  const isUnread = status === 'unread';
  const nextIsUnread = nextStatus === 'unread';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isUnread ? styles.unread : {}]}>
      <Image style={styles.icon} source={src} />

      <View
        style={[
          styles.right,
          isUnread
            ? styles.rightUnread
            : nextIsUnread
            ? styles.rightUnread
            : styles.rightRead,
        ]}>
        <Text style={styles.label}>Transfer Berhasil</Text>
        <Text style={styles.text}>
          Transfer senilai Rp45.000 telah dikirim kepada Steven Clark.
        </Text>
        <Text style={styles.time}>3 Mar, 2023 15:16</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    gap: 16,
    paddingTop: 16,
  },
  unread: {
    backgroundColor: 'rgba(111, 105, 172, 0.1)',
  },
  icon: {
    width: 54,
    height: 54,
  },
  right: {
    flex: 1,
    paddingBottom: 16,
  },
  rightRead: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.gray100,
  },
  rightUnread: {},
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: colors.gray.gray600,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray500,
    marginTop: 4,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray400,
    marginTop: 10,
  },
});
