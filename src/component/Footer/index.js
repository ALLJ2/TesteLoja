import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';

import Shoes from '../Shoes';

export default function Detail({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>VOCE TAMBEM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/2.png')} cost="R$170,90" onClick={() => navigation.navigate('Detail')}>
                            Squidward Tentacles
                        </Shoes>
                        <Shoes img={require('../../assets/3.png')} cost="R$199,90" onClick={() => navigation.navigate('Detail')}>
                            Nike Harper
                        </Shoes>
                        <Shoes img={require('../../assets/4.png')} cost="R$400,90" onClick={() => navigation.navigate('Detail')}>
                            Nike Sanduiche
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        marginVertical: '2%',
        paddingHorizontal: '2%',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter_100Thin',

    },
});
