import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import BasicIndicators from './BasicIndicatos';
import Icon from 'react-native-vector-icons/Ionicons';


const BasicIndicatorsStack = createStackNavigator();


const BasicIndicatorsTab = ({navigation}) => {
    return (
        <BasicIndicatorsStack.Navigator
            initialRouteName='BasicIndicators'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3a9cde',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    
                    alignSelf: 'center'
                }
            }}
        >
            <BasicIndicatorsStack.Screen 
                name='BasicIndicators' 
                component={BasicIndicators} 
                options={{
                    title: 'Основные показатели',
                    headerLeft: () => (
                        <Icon.Button 
                            name='ios-menu' 
                            size={25} 
                            backgroundColor='#3a9cde'
                            onPress={() => navigation.openDrawer()}>
                        </Icon.Button>
                    ),
                    headerRight: () => (
                        <Icon.Button
                            size={25} 
                            backgroundColor='#3a9cde'
                            onPress={() => {}}>
                        </Icon.Button>
                    )
                }}
            />
        </BasicIndicatorsStack.Navigator>
    )
}

export default BasicIndicatorsTab;