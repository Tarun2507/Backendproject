import React from 'react'
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    createBottomTabNavigator,
    BottomTabBar
} from "@react-navigation/bottom-tabs"
import Home  from '../Screens/Home'
import Search from '../Screens/Search'
import {  icons } from '../Constants'
import { COLORS } from '../Constants/theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import Orders from '../Screens/Orders'
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome  name={'home'} size={EStyleSheet.value('25rem')} color={'black'} />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
        
                }}
            />
             <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome  name={'gift'} size={EStyleSheet.value('25rem')} color={'black'} />
                    ),
                }}
            />

        
        </Tab.Navigator>
    )
}

export default Tabs