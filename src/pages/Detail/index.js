import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Buy from '../../component/Buy';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: "Sapato legal"
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
                </View>

                <View style={{ opacity: 0.4 }}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Sapatenis</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb5e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
                        <SizeButton>37</SizeButton>
                        <SizeButton>39</SizeButton>
                        <SizeButton>44</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Sapato legal
                    </Text>
                </View>
                <Text style={styles.textContent}>
                    Esse tenis é bom demais, provavelmente o melhor de todos os tempos. Compre.
                </Text>
                <Text style={styles.textList}>
                    - Categoria: Amortecimento
                </Text>
                <Text style={styles.textList}>
                    - Material: Mesh
                </Text>

                <Buy />

                <View style={styles.line} />

                <Footer />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },

    image: {
        width: '100%',
    },

    title: {
        fontFamily: 'Inter_100Thin',
        fontWeight: 'bold',
        paddingHorizontal: '2%',
    },

    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        lineHeight: 25,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderBottomColor: '#DDD',
        borderWidth: 1,
        marginVertical: '2%',
    },
});
