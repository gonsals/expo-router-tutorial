import React from 'react';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { CATEGORIES } from '../data/categories';

export default function Page() {

    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 5, height: "100%", alignContent: 'center' }}>
            {CATEGORIES.map((category) => (
                <Link
                    key={category.id}
                    href={{
                        pathname: "/brand/[name]",
                        params: { name: category.name }
                    }}>
                    < View style={{ width: 180, height: 180, backgroundColor: `${category.color}`, justifyContent: 'center', alignItems: "center" }}>

                        <Text>{category.name}</Text>
                    </View >
                </Link>
            ))
            }
        </View >
    );
}
