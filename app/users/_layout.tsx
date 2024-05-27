import { Stack, useLocalSearchParams } from 'expo-router';

export default function TabLayout() {

    const { name } = useLocalSearchParams();


    return (
        <Stack>
            <Stack.Screen name="[name]" options={{ title: `${name}` }} />
        </Stack>
    )
}