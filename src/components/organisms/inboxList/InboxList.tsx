import { InboxListing } from 'components/molecules';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Inbox } from 'types/inbox';

export const InboxList: React.FC = () => {
  const [inbox] = useState<Inbox[]>([
    {
      name: 'David Yosimura',
      avatar: require('assets/avatars/avatar-2.png'),
      text: "Thanks i'll ready as soon as possible sir.",
      status: 'read',
      createdAt: 'Today',
    },
    {
      name: 'Maria Cheese',
      avatar: require('assets/avatars/avatar-5.png'),
      text: 'I think so',
      status: 'unread',
      createdAt: 'Today',
    },
    {
      name: 'Shawley Schweinsteiger',
      avatar: require('assets/avatars/avatar-3.png'),
      text: 'Thank you so much for help.',
      status: 'unread',
      createdAt: 'Yersterday',
    },
    {
      name: 'Alex',
      avatar: require('assets/avatars/avatar-4.png'),
      text: 'Here we go, sometime we can not belive that',
      status: 'unread',
      createdAt: 'Mar 23',
    },
  ]);

  return (
    <View style={styles.container}>
      {inbox.map(({ name, avatar, text, status, createdAt }, i) => (
        <InboxListing
          key={i}
          name={name}
          avatar={avatar}
          text={text}
          status={status}
          createdAt={createdAt}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
