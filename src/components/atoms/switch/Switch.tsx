import { colors } from 'constants/colors';
import React, { useCallback } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const SWITCH_W = 36;
const BULLET_SIZE = 14;
const SWITCH_PADDING = 4;
const SWITCH_TRANSLATE_X = SWITCH_W - (2 * SWITCH_PADDING + BULLET_SIZE);

interface Props {
  status: SharedValue<boolean>;
  disabledSwitchTouch?: boolean;
}

export const Switch: React.FC<Props> = ({
  status,
  disabledSwitchTouch = false,
}) => {
  const switchTranslationX = useDerivedValue(() => {
    return status.value ? withTiming(SWITCH_TRANSLATE_X) : withTiming(0);
  }, [status.value]);

  const progress = useDerivedValue(() => {
    return status.value ? withTiming(1) : withTiming(0);
  }, [status.value]);

  const bgColorStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray.gray300, colors.primary],
    );

    return {
      backgroundColor: bgColor,
    };
  });

  const bulletStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: switchTranslationX.value }],
    };
  });

  const handleClick = useCallback(() => {
    status.value = !status.value;
  }, []);

  return (
    <TouchableWithoutFeedback
      disabled={disabledSwitchTouch}
      onPress={handleClick}>
      <Animated.View style={[styles.container, bgColorStyle]}>
        <Animated.View style={[styles.bullet, bulletStyles]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SWITCH_PADDING,
    borderRadius: BULLET_SIZE + SWITCH_PADDING * 2,
    width: SWITCH_W,
  },
  bullet: {
    width: BULLET_SIZE,
    height: BULLET_SIZE,
    borderRadius: BULLET_SIZE,
    backgroundColor: colors.white,
  },
});
