import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

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
        <View style={styles.inner} />
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  inner: {},
});
