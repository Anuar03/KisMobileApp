import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';

import { SearchBar, ListItem, Icon } from 'react-native-elements';

const wells = [
    {
        uwi: 'KZH_0256_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_0368_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_4580_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_0335_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_1569_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_2365_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_1234_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
    {
        uwi: 'KZH_6912_W',
        org: 'ГУ-151',
        tech: 'ЗУ-125',
        geo: 'ЛОН-15'
    },
]

const WellsSearch = ({navigation}) => {

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setMasterDataSource(wells);
    }, []);

    const filterFunction = (text) => {
        const newWells = masterDataSource.filter(item => {
            const uwi = item.uwi.toUpperCase();
            return (uwi.includes(text)) ? true : false
        })

        setFilteredDataSource(newWells);
    }

    const renderItem = ({item}) => (
        <ListItem
            bottomDivider
            style={{marginTop: 10, color: 'white'}}
            containerStyle={{
                backgroundColor: '#e0e0e0',
                borderRadius: 10,
                marginHorizontal: 10
            }}
            topDivider
            onPress={() => {navigation.navigate('Well', {uwi: item.uwi})}}
            underlayColor="#f2f0f2" activeOpacity={1}
            >
            <Icon name='list'/>
            <ListItem.Content>
                <ListItem.Title>{item.uwi}</ListItem.Title>
                <View style={{flexDirection: 'row'}}>
                    <ListItem.Subtitle>{item.org} | </ListItem.Subtitle>
                    <ListItem.Subtitle>{item.tech} | </ListItem.Subtitle>
                    <ListItem.Subtitle>{item.geo}</ListItem.Subtitle>
                </View>
                
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )

    const keyExtractor = (item, index) => index.toString()

    return (

        <View>
            <SearchBar
                placeholder='Type here...'
                onChangeText={(val) => {filterFunction(val)}}
                platform='default'
                lightTheme={true}
                value={search}
            />

            <FlatList 
                keyExtractor={keyExtractor}
                data={filteredDataSource}
                renderItem={renderItem}

                style={{
                    backgroundColor: '#f2f0f2'
                }}
            />
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