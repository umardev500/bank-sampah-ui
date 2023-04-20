import { Avatar, ChatRightBottom, ChatRightTop } from 'components/atoms';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Inbox } from 'types/inbox';

interface Props extends Inbox {}

export const InboxListing: React.FC<Props> = ({
  name,
  avatar,
  text,
  status,
  createdAt,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar source={avatar} />

      <View style={styles.right}>
        <ChatRightTop name={name} status={status} createdAt={createdAt} />
        <ChatRightBottom text={text} status={status} avatar={avatar} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
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
});
