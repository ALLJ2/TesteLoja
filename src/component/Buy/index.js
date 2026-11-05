import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function Buy() {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity>
                <Text style={styles.title}> COMPRAR</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: '90%',
        height: '50',
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 17,
        color: '#fff',
    },

});
