import { colors } from 'constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const BalanceCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Balance</Text>
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Icon
              style={styles.dots}
              name="dots-vertical"
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.balance}>IDR 50.000</Text>
      </View>

      <Text style={styles.id}>Savings 13256049460</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    gap: 10,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 16,
    color: colors.white,
  },
  dots: {
    marginRight: -12,
  },
  balance: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: colors.white,
  },
  id: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.6,
  },
});
