import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
    const unidades = [
        { label: "Quilômetro (km)" },
        { label: "Metro (m)"},
        { label: "Centímetro (cm)"},
        { label: "Milímetro (mm)"},
        { label: "Micrômetro (µm)"},
        { label: "Nanômetro (nm)"},
        { label: "Milha (mi)"},
        { label: "Jarda (yd)"},
        { label: "Pé (ft)"},
        { label: "Polegada (in)"},
    ];

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}> 
            <View style={styles.containur}>
                <Image style={styles.logo} source={require("../src/lightlogo.png")} />
                <Text style={styles.boasvindas}>Comprimento</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item label={unidade.label} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item label={unidade.label} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* Repita a mesma estrutura para as outras seções: "Área", "Tempo" e "Volume" */}
            <View style={styles.container}>
                <Text style={styles.boasvindas}>Área</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item label={unidade.label}  />
                        ))}
                    </Picker>
                </View>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item  label={unidade.label}  />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.boasvindas}>Tempo</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item label={unidade.label}/>
                        ))}
                    </Picker>
                </View>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item  label={unidade.label}  />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.boasvindas}>Volume</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item label={unidade.label}  />
                        ))}
                    </Picker>
                </View>
                <View style={styles.inputSection}>
                    <TextInput style={styles.input} />
                    <Picker style={styles.picker}>
                        {unidades.map((unidade) => (
                            <Picker.Item  label={unidade.label} />
                        ))}
                    </Picker>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containur: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    inputSection: {
        flex: 1,
        marginHorizontal: 5,   
        marginVertical: 10,  
    },
    input: {
        borderWidth: 3,
        borderColor: "#C74F55",
        padding: 5,
        marginHorizontal: 10,
        fontSize:24,
    },
    picker: {
        borderWidth: 3,
        borderColor: "#C74F55",
        backgroundColor: "#C74F55",
        color: "#FFFFFF",
        marginTop: -1,
        marginHorizontal: 10,
    },
});
