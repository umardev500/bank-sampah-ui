import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {TopUpListing} from 'components/molecules';
import {colors} from 'constants/colors';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

export const TopUpBottomSheet = React.forwardRef<BottomSheetModal, Props>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    return (
      <BottomSheetModal
        containerStyle={styles.container}
        index={1}
        ref={ref}
        snapPoints={snapPoints}>
        <View style={styles.inner}>
          <Text style={styles.label}>Pilih Layanan</Text>

          <View style={styles.list}>
            <TopUpListing title="Saldo" />
            <TopUpListing title="PLN" />
            <TopUpListing title="Pulsa" />
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
