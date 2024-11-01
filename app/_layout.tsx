import { SQLiteProvider } from "expo-sqlite";
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { inicializeDatabase } from "./database/inicializedatabase";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function layout() {
    return (
        <SQLiteProvider databaseName="ConversaoBD.db" onInit={inicializeDatabase}>
            <Tabs screenOptions={{
                tabBarStyle: { backgroundColor: '#C74F55', height: 60 },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF'
            }}>
                <Tabs.Screen
                    name="converter"
                    options={{
                        headerShown: false,
                        tabBarLabel: () => null, // Remove o texto abaixo do ícone
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="pluscircle" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        tabBarLabel: () => null, // Remove o texto abaixo do ícone
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="home" color={color} size={size} />
                        ),
                    }}
                />
                 <Tabs.Screen
                    name="config"
                    options={{
                        headerShown: false,
                        tabBarLabel: () => null, // Remove o texto abaixo do ícone
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="gear" color={color} size={size} />
                        ),
                    }}
                />
              
            </Tabs>
        </SQLiteProvider>
    );
}
