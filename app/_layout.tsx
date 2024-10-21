import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" options={{title: 'Produtos'}} />
            <Stack.Screen name="product/[id]"
            options={{
                headerShown: true
            }}
            />
        </Stack>
    )
}