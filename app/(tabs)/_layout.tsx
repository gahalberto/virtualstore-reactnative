import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#0000FF'
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="home"
                        color={color} />
                }}
            />

            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color} />
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color} />
                }}
            />

        </Tabs>
    )
}