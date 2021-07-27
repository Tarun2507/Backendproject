// import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from 'react-navigation-stack';
import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import Cart from './Screens/cart/cart'
import Tabs from './navigation/Tabs'
import login from './Screens/login'
import SignUp from './Screens/Signup';
const Stack = createStackNavigator();
function AppFlow() {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
                 <Stack.Screen name="login" component={login}/>

                  <Stack.Screen name="signup" component={SignUp}/>
                 <Stack.Screen name="Tab" component={Tabs} />
           
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}
export default AppFlow;
