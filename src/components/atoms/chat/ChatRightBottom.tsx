import { colors } from 'constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Inbox } from 'types/inbox';

interface Props extends Pick<Inbox, 'text' | 'status' | 'avatar'> {}

export const ChatRightBottom: React.FC<Props> = ({ text, status, avatar }) => {
  const isRead = status === 'read';
  return (
    <View style={styles.rightBottom}>
      <Text
        numberOfLines={1}
        style={[styles.text, isRead ? styles.textRead : styles.textUnRead]}>
        {text}
      </Text>
      {isRead ? <Image style={styles.readIcon} source={avatar} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
