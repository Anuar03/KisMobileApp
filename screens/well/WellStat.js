import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const WellStat = () => {
    return (
        <View style = {styles.container}>
            <Text>Basic Indicators Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button clicked')}>
            </Button>
        </View>
    )
}

export default WellStat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})