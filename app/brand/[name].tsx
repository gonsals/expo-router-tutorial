import React, { useEffect, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
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

    const renderItem = ({ item }: { item: any }) => {
        // Extraer el modelo del primer atributo
        const modelo = item.attributes.find((attr: any) => attr.name === "Modelo")?.value_name;

        return (
            <Link
                style={{
                    backgroundColor: '#f9c2ff',
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                }}
                href={{
                    pathname: "/brand/description/[description]",
                    params: { description: modelo || name }
                }}
            >
                <Text style={{ fontSize: 32 }}>{item.title}</Text>
            </Link>
        );
    };

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
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
        </SafeAreaView>
    );
}
