import { Avatar } from 'components/atoms';
import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Inbox } from 'types/inbox';

interface Props extends Inbox {}

export const InboxListing: React.FC<Props> = ({
  name,
  avatar,
  text,
  status,
  createdAt,
}) => {
  const isRead = status === 'read';

  return (
    <TouchableOpacity style={styles.container}>
      <Avatar source={avatar} />

      <View style={styles.right}>
        <View style={styles.rightTop}>
          <Text
            style={[styles.name, isRead ? styles.nameRead : styles.nameUnread]}
            numberOfLines={1}>
            {name}
          </Text>
          <Text
            style={[styles.time, isRead ? styles.timeRead : styles.timeUnread]}>
            {createdAt}
          </Text>
        </View>
        <View style={styles.rightBottom}>
          <Text
            numberOfLines={1}
            style={[styles.text, isRead ? styles.textRead : styles.textUnRead]}>
            {text}
          </Text>
          {isRead ? (
            <Image
              style={styles.readIcon}
              source={require('assets/avatars/avatar-2.png')}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  right: {
    flex: 1,
    gap: 1,
  },
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
  rightBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    gap: 10,
  },
  readIcon: {
    width: 18,
    height: 18,
  },
  text: {
    lineHeight: 20,
    flex: 1,
  },
  textRead: {
    color: colors.gray.gray500,
    fontFamily: 'Roboto-Regular',
  },
  textUnRead: {
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Bold',
  },
});
