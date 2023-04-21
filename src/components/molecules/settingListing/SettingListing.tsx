import { Switch } from 'components/atoms';
import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  subTitle?: string;
  hasSwitch?: boolean;
  switchStatus?: SharedValue<boolean>;
}

export const SettingListing: React.FC<Props> = ({
  title,
  subTitle,
  hasSwitch = false,
  switchStatus,
}) => {
  const hasSubtitle = subTitle !== undefined;

  return (
    <View style={styles.container}>
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
    </View>
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
    backgroundColor: 'white',
    borderRadius: 8,
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
