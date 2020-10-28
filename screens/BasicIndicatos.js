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

    const data = [
        { name: 'Нефть', population: 21500000, color: '#677273', legendFontColor: '#677273', legendFontSize: 15 },
        { name: 'Вода', population: 2800000, color: '#3b54f7', legendFontColor: '#3b54f7', legendFontSize: 15 },
        { name: 'Газ', population: 527612, color: '#57fa05', legendFontColor: '#57fa05', legendFontSize: 15 },
        { name: 'Еще что то', population: 8538000, color: '#eb5210', legendFontColor: '#eb5210', legendFontSize: 15 },
      ]

      const commitsData = [
        { date: '2017-01-02', count: 1 },
        { date: '2017-01-03', count: 2 },
        { date: '2017-01-04', count: 3 },
        { date: '2017-01-05', count: 4 },
        { date: '2017-01-06', count: 5 },
        { date: '2017-01-30', count: 2 },
        { date: '2017-01-31', count: 3 },
        { date: '2017-03-01', count: 2 },
        { date: '2017-04-02', count: 4 },
        { date: '2017-03-05', count: 2 },
        { date: '2017-02-30', count: 4 }
      ]
    return (
        <ScrollView style = {styles.container}
            
        >
            <ScrollView style = {styles.container}
            horizontal={true}
            >
            
                <View style={styles.chartContainer}>
                    <Text
                        style={{
                            textAlign: 'center'
                        }
                    }>
                        Закачка воды
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
                            backgroundGradientFrom: '#0fe60b',
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

                <View style={styles.chartContainer}>
                    <Text style={{
                        textAlign: 'center'
                    }}>
                        Добыча нефти
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
                            backgroundGradientFrom: '#f0ec16',
                            backgroundGradientTo: '#eb5210',
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

                <View style={styles.chartContainer}>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                    Добыча газа
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
                            backgroundGradientFrom: '#f0ec16',
                            backgroundGradientTo: '#0fe60b',
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

                <View style={styles.chartContainer}>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        Утечки
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
            
            <View style={styles.chartContainer}>
                <Text style={{
                    textAlign: 'center'
                }}>
                    Совокупные данные
                </Text>

                <PieChart
                    data={data}
                    width={Dimensions.get('window').width * 0.95}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#f0ec16',
                        backgroundGradientTo: '#eb5210',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                />
            </View>

            <View style={styles.chartContainer}>
                <Text style={{
                    textAlign: 'center',
                    marginBottom: 10
                }}>
                    Добыча за месяц
                </Text>


                <ContributionGraph
                    values={commitsData}
                    endDate={new Date('2017-04-01')}
                    numDays={105}
                    width={Dimensions.get('window').width * 0.95}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#34d8eb',
                        backgroundGradientFrom: '#1aff00',
                        backgroundGradientTo: '#00c3ff',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
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
    },
    chartContainer: {
        marginHorizontal: 10, 
        marginTop: 10,
        textAlign: 'center',
        padding: 3,
        borderBottomWidth: 0.5,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        height: 272,
        borderRadius: 5
    }
})