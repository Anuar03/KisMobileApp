import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const WellsSearch = () => {
    return (
        <View style = {styles.container}>
            <Text>Wells Seaech Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button clicked')}>
            </Button>
        </View>
    )
}

export default WellsSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})