import {Button} from 'components/atoms';
import {Header, Keyboard, ValueView} from 'components/organisms';
import {colors} from 'constants/colors';
import {toPrice} from 'helpers/toPrice';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyPad} from 'types/keyboard';

export const TopUpValue: React.FC = () => {
  const [price, setPrice] = useState<KeyPad>('0');

  const typeHandler = (value: KeyPad) => {
    let isOk = true;
    if (price.charAt(0) === '0') {
      if (value === '0' || value === '000') {
        isOk = false;
      }
    }

    if (value !== 'delete' && isOk) {
      setPrice(prev => {
        let result: KeyPad = '0';
        if (prev !== '0') {
          result = (prev + value) as KeyPad;
        } else {
          result = value;
        }

        return result;
      });
    }
  };

  return (
    <View style={styles.root}>
      <Header title="Alfamart" />
      <View style={styles.inner}>
        <ValueView price={price} />
        <View style={styles.keyboard}>
          <Keyboard onPress={typeHandler} />
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.totalLabel}>Total Pembayaran</Text>
              <Text style={styles.totalPrice}>{toPrice(price, 'Rp')}</Text>
            </View>
            <Button opacity={0.7} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  keyboard: {
    backgroundColor: colors.white,
    elevation: 8,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 16,
  },
  bottom: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  bottomLeft: {
    flex: 1,
  },
  totalLabel: {
    color: colors.gray.gray400,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
});
