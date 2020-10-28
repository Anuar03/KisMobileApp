import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';


export default function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style= {{marginBottom: 20}}>
                        <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={require('../assets/blank.png')}
                                size={50}
                            >
                            </Avatar.Image>
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Anuar Naztaev</Title>
                                <Caption style={styles.caption}>@anuar</Caption>
                            </View>
                        </View>
                    </View>
                    </Drawer.Section>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name='ios-alert'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Основные показатели'
                            onPress={() => {props.navigation.navigate('BasicIndicatorsTab')}}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name='ios-search'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Поиск скважин'
                            onPress={() => {props.navigation.navigate('WellSearchTab')}}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name='ios-calculator'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='График замеров'
                            onPress={() => alert('Еще не реализовано')}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name='ios-cog'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Настройки'
                            onPress={() => alert('Еще не реализовано')}
                        >
                        </DrawerItem>
                    </Drawer.Section>

                    <Drawer.Section style={{marginTop: 25}}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name='ios-hammer'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Поддержка'
                            onPress={() => alert('Мы вас поддерживаем')}
                        >
                        </DrawerItem>
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name='ios-log-out'
                            color={color}
                            size={size}/>
                    )}
                    label='Выйти'
                    onPress={() => {}}
                >    
                </DrawerItem>
            </Drawer.Section>
        </View>
    )
}




const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});