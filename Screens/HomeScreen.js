// NOTE Imported Libs from react
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';

// NOTE MAIN body Component for the Home Screen
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.homeMarg}>Home</Text>
            <Button mode='contained'onPress={() =>{}}>
                Go To Detials
            </Button>

            <Divider style={styles.divider} />

            <Button mode='outlined' icon='camera' onPress={() =>{}}>
                Go to Gallery
            </Button>

        </View>
    );
}


// NOTE MAIN Styles ref 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  divider: {marginVertical: 18},
  homeMarg: {marginBottom: 16},
});

/*CODE Graveyard
    * OLD title CSS for text on react native core
    * title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
*/