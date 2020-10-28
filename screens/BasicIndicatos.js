import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ScrollView} from 'react-native';

import { 
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph 
} from 'react-native-chart-kit';

const BasicIndicators = () => {
    return (
        <ScrollView style = {styles.container}>
            <View style={{marginHorizontal: 10, marginTop: 10}}>
                <Text>
                    Bezier Line Chart
                </Text>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width * 0.95} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#34d8eb',
                        backgroundGradientTo: '#34d8eb',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>

            <View style={{marginHorizontal: 10, marginTop: 10}}>
                <Text>
                    Bezier Line Chart
                </Text>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width * 0.95} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#34d8eb',
                        backgroundGradientTo: '#34d8eb',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>

            <View style={{marginHorizontal: 10, marginTop: 10}}>
                <Text>
                    Bezier Line Chart
                </Text>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width * 0.95} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#34d8eb',
                        backgroundGradientTo: '#34d8eb',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>

            <View style={{marginHorizontal: 10, marginTop: 10}}>
                <Text>
                    Bezier Line Chart
                </Text>
                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [{
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width * 0.95} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#34d8eb',
                        backgroundGradientTo: '#34d8eb',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>


            
        </ScrollView>
    )
}

export default BasicIndicators;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})