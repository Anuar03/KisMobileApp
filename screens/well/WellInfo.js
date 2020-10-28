import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const WellInfo = ({uwi}) => {
    return (
            <View style={styles.wellName}>
                <Text
                    color='#3F57D2'
                    style={{
                        fontSize: 24,
                        fontFamily: 'serif'
                    }}
                >
                    {uwi}
                </Text>    
            </View>  
    )
}

export default WellInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    wellName: {
        marginTop: 5,
        height: 100,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        marginHorizontal: 10,
        borderWidth: 0.5

    }
})