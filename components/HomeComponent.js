import { createStackNavigator } from '@react-navigation/stack';
import {SermonList} from './SermonList';
import React from 'react';
import SermonDetail from './SermonDetail';

const Stack = createStackNavigator();

export function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SermonList}/>
        <Stack.Screen name="SermonDetail"  component={SermonDetail}/>
        </Stack.Navigator>
    )
}
