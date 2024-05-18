import { NavigationContainer } from '@react-navigation/native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import TabBarIcon from '../Components/TabBarIcon';
import Charts from '../Screens/Charts';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import Wallet from '../Screens/Wallet';
import { customColors } from '../Theme/globalStyles';

const Tabs = AnimatedTabBarNavigator();

export default () => (
  <NavigationContainer>
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: customColors.primaryLight,
        inactiveTintColor: customColors.snowWhite,
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.SMALL,
        tabBarBackground: customColors.darkGrey,
        activeTabBackgrounds: customColors.black,
      }}
    >
      <Tabs.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} tintColor={color} name='home' />
          ),
        }}
      />
      <Tabs.Screen
        name='Wallet'
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} tintColor={color} name='wallet' />
          ),
        }}
      />
      <Tabs.Screen
        name='Charts'
        component={Charts}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} tintColor={color} name='linechart' />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} tintColor={color} name='user' />
          ),
        }}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);
