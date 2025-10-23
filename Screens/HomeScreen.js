// NOTE Imported Libs from react
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Shauns Pro App</Text>
            <Button 
                title="Go to Details"
                onPress={ () => navigation.navigate('Details', {user: 'Guest'})}
            />
        </View>
    );
}


// NOTE MAIN Styles ref 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});