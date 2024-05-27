import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2D93AD',
                },
                headerTintColor: '#AAC0AF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="index" options={{
                title: "Home"
            }} />
            <Stack.Screen name="users" options={{ headerShown: false }} />

        </Stack>
    );
};

export default _layout;