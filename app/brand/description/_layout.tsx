import { Stack, useLocalSearchParams } from 'expo-router';

export default function TabLayout() {

    const { name } = useLocalSearchParams();


    return (
        <Stack>
            <Stack.Screen name="[description]" options={{ title: `${name}` }} />
        </Stack>
    )
}