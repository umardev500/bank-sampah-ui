import { NotificationListing } from 'components/molecules';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Notification } from 'types/notification';

export const NotificationList: React.FC = () => {
  const [notification] = useState<Notification[]>([
    { name: 'transfer', status: 'unread' },
    { name: 'received', status: 'unread' },
    { name: 'pln', status: 'read' },
    { name: 'credit', status: 'read' },
  ]);
  const notificationLength = notification.length;

  return (
    <View style={styles.container}>
      {notification.map((val, i) => {
        const nextIndex = i + 1 !== notificationLength ? i + 1 : i;
        const nextStatus = notification[nextIndex].status;

        return (
          <NotificationListing
            key={i}
            nextStatus={nextStatus}
            status={val.status}
            name={val.name}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
