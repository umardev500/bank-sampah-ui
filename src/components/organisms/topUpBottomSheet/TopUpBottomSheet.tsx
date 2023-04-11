import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TopUpListing} from 'components/molecules';
import {colors} from 'constants/colors';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStack} from 'types/rootStack';

interface Props {
  name?: string;
}

type NavigationProps = StackNavigationProp<RootStack>;

export const TopUpBottomSheet = React.forwardRef<BottomSheetModal, Props>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const navigation = useNavigation<NavigationProps>();

    const handleBalanceClick = useCallback(() => {
      navigation.navigate('balanceTopUp');
    }, []);

    return (
      <BottomSheetModal
        containerStyle={styles.container}
        index={1}
        ref={ref}
        snapPoints={snapPoints}>
        <View style={styles.inner}>
          <Text style={styles.label}>Pilih Layanan</Text>

          <View style={styles.list}>
            <TopUpListing
              icon={require('assets/icons/balance.png')}
              onPress={handleBalanceClick}
              title="Saldo"
            />
            <TopUpListing icon={require('assets/icons/pln.png')} title="PLN" />
            <TopUpListing
              icon={require('assets/icons/credit.png')}
              title="Pulsa"
            />
          </View>
        </View>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  inner: {
    padding: 24,
  },
  label: {
    fontSize: 16,
    color: colors.gray.gray600,
    fontFamily: 'Roboto-Regular',
  },
  list: {
    paddingTop: 16,
  },
});
