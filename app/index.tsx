import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';


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
        <View>
            <View style={styles.container}>
            <Image style={styles.logo} source={require("../src/lightlogo.png")}/>

            <Text style={styles.boasvindas}>Boas-vindas!</Text>
            </View>
            
            <View style={styles.sobre}>
            <Text style={styles.sobre}>Sobre:</Text>
            </View>

            <View style={styles.resto}>
                <Text style={styles.sobretxt}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                </Text>
            </View>

            <View  style={styles.historico}>
              <Text style={styles.sla}>Histórico de conversões:</Text>
              
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
            
        <FontAwesome name='gear' size={35} style={styles.fontiausome} color={"#2970CC"}/>
          
            
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontiausome:{
        position:'absolute',
        top: 40,
        right:15,
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
    conversionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#C74F55",
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
 
    logo: {
        marginBottom:24,
        marginTop:37,
    },
    boasvindas: {
        color:"#2970CC",
        fontWeight:'bold',
        fontSize:24,
    },
    sobre: {
        marginLeft:25,
        color:"#2970CC",
        fontWeight:'bold',
        fontSize:24,
        marginTop:25,
    },
    sobretxt: {
        color:"#90989F",
        fontSize:12,

    },
    resto: {
        alignItems: 'center',
        justifyContent: 'center',
        width:300,
        marginLeft:50,
    },
    historico: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
       
    },
    sla: {
        color:"#2970CC",
        fontWeight:'bold',
        fontSize:24,
    },


});