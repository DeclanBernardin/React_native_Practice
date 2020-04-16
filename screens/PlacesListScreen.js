import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';




    function PlacesListScreen ({ navigation })  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


const styles = StyleSheet.create({

});

export default PlacesListScreen;