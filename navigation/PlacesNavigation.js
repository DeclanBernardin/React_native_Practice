import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PlacesList from '../screens/PlacesListScreen';
import PlacesDetails from '../screens/PlaceDetailScreen'; 
import NewPlace from '../screens/NewPlaceScreen'; 
import MapScreen from '../screens/MapScreen';
import PlacesListScreen from '../screens/PlacesListScreen';

class PlacesNavigation extends Component {

    

    render() {

        const Stack = createStackNavigator();  

        return(
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="PlacesList" component={PlacesList} options={{title: 'Test'}} />
                        <Stack.Screen name="Details" component={PlacesDetails} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default PlacesNavigation;