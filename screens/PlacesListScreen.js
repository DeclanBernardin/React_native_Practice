import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PlaceDetails from '../screens/PlaceDetailScreen'

class PlacesListScreen extends Component {
    render() {
        return (
            <View>
                <Text>PlacesListScreen</Text>
                <Button title='test' component={PlaceDetails} />
            </View>
        );
    };
};

const styles = StyleSheet.create({

});

export default PlacesListScreen;