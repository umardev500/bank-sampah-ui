import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useEffect } from 'react';

export const useCloseAllModal = () => {
  const bar = useBottomSheetModal();
  useEffect(() => {
    const hideModalHandler = () => {
      bar.dismissAll();
    };
    const hideModal = setTimeout(hideModalHandler, 100);

    return () => clearTimeout(hideModal);
  }, []);
};
