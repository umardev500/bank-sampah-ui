import {colors} from 'constants/colors';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  item: {
    name: string;
    price: string;
    photo: ImageSourcePropType;
    status: 'received' | 'sent';
  };
}

export const HistoryListing: React.FC<Props> = ({item}) => {
  const receiveIcon = require('assets/icons/receive-arrow.png');
  const sendIcon = require('assets/icons/send-arrow.png');
  const statusIcon = item.status === 'received' ? receiveIcon : sendIcon;
  const receiveText = 'Payment received';
  const sendText = 'Payment complete';
  const statusText = item.status === 'received' ? receiveText : sendText;

  return (
    <TouchableOpacity style={styles.container}>
      {/* Left side */}
      <View style={styles.left}>
        <View>
          <Image style={styles.image} source={item.photo} />
          <Image style={styles.status} source={statusIcon} />
        </View>
      </View>

      {/* Right */}
      <View style={styles.right}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>08:25 {statusText}</Text>
        </View>
        <Text style={styles.price}>+ Rp{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  status: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 22,
    height: 22,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 16,
    borderBottomColor: colors.gray.gray200,
  },
  info: {
    gap: 4,
  },
  name: {
    fontSize: 16,
    color: colors.gray.gray500,
    fontWeight: '500',
  },
  time: {
    color: colors.gray.gray400,
  },
  desc: {
    color: colors.gray.gray400,
  },
  price: {
    fontSize: 16,
    color: colors.green.green600,
    fontWeight: '500',
  },
});
