import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const BasicIndicators = () => {
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

export default BasicIndicators;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})