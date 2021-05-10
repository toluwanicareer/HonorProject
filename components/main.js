import React, { Component } from 'react';
import Home from './HomeComponent';


import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack} from './HomeComponent';




const Drawer = createDrawerNavigator();


class Main extends Component {

    render() {
        return (
            <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeStack} />
            </Drawer.Navigator>
          </NavigationContainer>
        );
    }
}

export default Main