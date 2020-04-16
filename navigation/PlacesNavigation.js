import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PlacesList from '../screens/PlacesListScreen';
import PlacesDetails from '../screens/PlaceDetailScreen'; 
import NewPlace from '../screens/NewPlaceScreen'; 
import MapScreen from '../screens/MapScreen';

class PlacesNavigation extends Component {

    

    render() {

        const Stack = createStackNavigator();  

        return(
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Places List" component={PlacesList} options={{title: 'Place List'}} />
                        <Stack.Screen name="Details" component={PlacesDetails} options={{title: 'Details'}} />
                        <Stack.Screen name="New Place" component={NewPlace} options={{title: 'New Place'}} />
                        <Stack.Screen name="Map Screen" component={MapScreen} options={{title: 'Map'}} />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default PlacesNavigation;