import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from 'components/atoms/tabIcon';
import {Home, Notification} from 'components/screens';
import React from 'react';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const MainNavigation: React.FC = () => {
  return (
    <BottomSheetModalProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <TabIcon
                  focused={focused}
                  sourceActive={require('assets/icons/home-active.png')}
                  source={require('assets/icons/home-inactive.png')}
                  style={styles.icon}
                />
              );
            },
            tabBarLabel: () => null,
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                sourceActive={require('assets/icons/bell-active.png')}
                source={require('assets/icons/bell-inactive.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: () => null,
          }}
          name="Notification"
          component={Notification}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                sourceActive={require('assets/icons/plus-active.png')}
                source={require('assets/icons/plus-inactive.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: () => null,
          }}
          name="Post"
          component={Notification}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                sourceActive={require('assets/icons/inbox-active.png')}
                source={require('assets/icons/inbox-inactive.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: () => null,
          }}
          name="Inbox"
          component={Notification}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                sourceActive={require('assets/icons/setting-active.png')}
                source={require('assets/icons/setting-inactive.png')}
                style={styles.icon}
              />
            ),
            tabBarLabel: () => null,
          }}
          name="Setting"
          component={Notification}
        />
      </Tab.Navigator>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
