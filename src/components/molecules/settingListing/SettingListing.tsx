import { Switch } from 'components/atoms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  subTitle?: string;
  hasSwitch?: boolean;
  switchStatus?: SharedValue<boolean>;
  onPress?: () => void;
}

export const SettingListing: React.FC<Props> = ({
  title,
  subTitle,
  hasSwitch = false,
  switchStatus,
  onPress,
}) => {
  const hasSubtitle = subTitle !== undefined;
  const active = useSharedValue(false);

  const tapGestureEvent =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onStart: () => {
        active.value = true;
      },
      onFinish: () => {
        if (onPress !== undefined) {
          onPress();
        }
        active.value = false;
      },
    });

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: active.value ? colors.gray.gray100 : colors.white,
    };
  }, []);

  return (
    <LongPressGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={[styles.container, containerStyle]}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {hasSubtitle ? (
            <Text numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </Text>
          ) : null}
        </View>
        {hasSwitch && switchStatus !== undefined ? (
          <Switch status={switchStatus} />
        ) : (
          <Icon
            name="keyboard-arrow-right"
            size={24}
            color={colors.gray.gray400}
          />
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray600,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: colors.gray.gray400,
  },
});
