import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { getData } from '../../data/getData';

export default function Page() {
    const { name } = useLocalSearchParams();
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const objects = await getData(name + "");
                setData(objects);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [name]);

    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <View style={{
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        }}>
            <Text style={{ fontSize: 32 }}>{title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            )}
        </SafeAreaView>
    );
}
