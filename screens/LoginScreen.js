import React from 'react';
import {
    View, 
    Text,
    Dimensions, 
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        login: '',
        password: '',
        secureTextEntry: true
    })

    const loginChange = (val) => {
        setData({
            ...data,
            login: val
        })
    }

    const passwordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    return (
        <View style = {styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.text_header}>Добро пожаловать!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Вход</Text>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Icon name='ios-person' color='#dbdad7' size={30}/>
                    <View style={[styles.action, {marginLeft: 10, flex: 3}]}>
                        <TextInput 
                            placeholder='Логин'
                            autoCapitalize='none'
                            style={styles.textInput}
                            onChangeText={val => loginChange(val)}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
                    <Icon name='ios-lock' color='#dbdad7' size={30}/>
                    <View style={[styles.action, {marginLeft: 10, flex: 3}]}>
                        <TextInput 
                            placeholder='Пароль'
                            secureTextEntry={data.secureTextEntry}
                            autoCapitalize='none'
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => updateSecureTextEntry()}
                    >
                        <Icon name='ios-eye' color='#dbdad7' size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <Button
                        title='Войти'
                        buttonStyle={{
                            color: '#3a9cde',
                            borderRadius: 15,
                            backgroundColor: '#017bff'
                        }}


                        onPress={() => navigation.navigate('DrawerScreensBar')}
                    >

                    </Button>
                </View>
                
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#017bff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 50,
    },
    signIn: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inButton: {
        borderRadius: 50
    }
  });