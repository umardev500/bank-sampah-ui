import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'components/atoms';
import { Keyboard, ValueView } from 'components/organisms';
import { colors } from 'constants/colors';
import { toPrice } from 'helpers/toPrice';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { KeyPad } from 'types/keyboard';
import { RootStack } from 'types/rootStack';

type NavigationProps = StackNavigationProp<RootStack>;

export const TopUpValue: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [price, setPrice] = useState('0');

  const typeHandler = (value: KeyPad) => {
    Vibration.vibrate(100);

    let isOk = true;
    if (price.charAt(0) === '0') {
      // check for price is zero value
      if (value === '0' || value === '000') {
        // check if inputted value is 0 or 000
        isOk = false;
      }
    }

    if (value !== 'delete' && isOk) {
      // check for inputted value not delete and isOK to true
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

  const clearHandler = useCallback(() => {
    Vibration.vibrate(100);
    setPrice('0');
  }, []);

  const deleteHandler = useCallback(() => {
    Vibration.vibrate(100);

    setPrice(prev => {
      let result = '0';
      const len = prev.length;
      if (len > 0 && len !== 1) {
        result = prev.substring(0, len - 1);
      }

      return result;
    });
  }, []);

  const handleSubmit = () => {
    navigation.navigate('topUpInfo');
  };

  return (
    <View style={styles.root}>
      <View style={styles.inner}>
        <ValueView onClear={clearHandler} price={price} />
        <View style={styles.keyboard}>
          <Keyboard onDelete={deleteHandler} onPress={typeHandler} />
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.totalLabel}>Total Pembayaran</Text>
              <Text style={styles.totalPrice}>{toPrice(price, 'Rp')}</Text>
            </View>
            <Button
              containerStyle={styles.button}
              text="Submit"
              onPress={handleSubmit}
              opacity={0.7}
            />
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
    gap: 10,
  },
  bottomLeft: {
    flexGrow: 1,
  },
  totalLabel: {
    color: colors.gray.gray400,
    fontFamily: 'Roboto-Medium',
  },
  totalPrice: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  button: {
    flexGrow: 1,
  },
});
