import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';

export const useBackdrop = () => {
  const renderBackdrop = useCallback(
    (backdropProps: BottomSheetBackdropProps) => {
      return <BottomSheetBackdrop {...backdropProps} />;
    },
    [],
  );

  return renderBackdrop;
};
