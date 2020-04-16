import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function PlaceDetailScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to New Place"
                onPress={() => navigation.navigate('New Place')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default PlaceDetailScreen;