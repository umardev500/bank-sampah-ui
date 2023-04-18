import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { colors } from 'constants/colors';
import { useBackdrop } from 'hooks/useBackdrop';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  name?: string;
  children?: React.ReactElement;
}

export const BottomSheet = React.forwardRef<BottomSheetModal, Props>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const renderBackdrop = useBackdrop();

    return (
      <BottomSheetModal
        index={1}
        ref={ref}
        backgroundStyle={styles.background}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicator}
        snapPoints={snapPoints}>
        <View style={styles.inner}>{props.children}</View>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  background: { backgroundColor: 'white', elevation: 8 },
  inner: {
    flex: 1,
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
  handleIndicator: {
    backgroundColor: colors.gray.gray400,
  },
});
