import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../src/lightlogo.png")}/>

                <Text style={styles.boasvindas}>Configurações</Text>
            </View>
            
            <View style={styles.sobre}>
                <Text style={styles.sobre}>Tema:</Text>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={checked1}
                        onValueChange={setChecked1}
                        color={checked1 ? 'blue' : undefined} // Altera a cor quando selecionado
                    />
                    <Text style={styles.checkboxLabel}>Checkbox 1</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={checked2}
                        onValueChange={setChecked2}
                        color={checked2 ? 'blue' : undefined} // Altera a cor quando selecionado
                    />
                    <Text style={styles.checkboxLabel}>Checkbox 2</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.Button} 
            >
                <Text style={styles.buttonText}>Apagar histórico</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        backgroundColor: "#2970CC",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    logo: {
        marginBottom: 24,
        marginTop: 37,
    },
    boasvindas: {
        color: "#2970CC",
        fontWeight: 'bold',
        fontSize: 24,
    },
    sobre: {
        marginLeft: 25,
        color: "#2970CC",
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 25,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        width: 30, 
        height: 30,
        borderWidth: 2,
    },
    checkboxLabel: {
        marginLeft: 10, 
        fontSize: 18, 
        color: "#2970CC", 
    },
});
