import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  status: 'read' | 'unread';
  createdAt: string;
}

export const ChatRightTop: React.FC<Props> = ({ status, name, createdAt }) => {
  const isRead = status === 'read';

  return (
    <View style={styles.rightTop}>
      <Text
        style={[styles.name, isRead ? styles.nameRead : styles.nameUnread]}
        numberOfLines={1}>
        {name}
      </Text>
      <Text style={[styles.time, isRead ? styles.timeRead : styles.timeUnread]}>
        {createdAt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rightTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  nameRead: {
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Regular',
  },
  nameUnread: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Bold',
  },
  time: {
    fontSize: 12,
  },
  timeRead: {
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray500,
  },
  timeUnread: {
    fontFamily: 'Roboto-Bold',
    color: colors.gray.gray600,
  },
});
