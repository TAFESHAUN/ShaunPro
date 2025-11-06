import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper';

//*SECTION - Task Screen Page
export default function TasksScreen() {
    //MOCK DATA START
    const [tasks, setTasks] = React.useState([
        { id: 1, text: 'Finish assessment'},
        { id: 2, text: "Review git commits"},
    ]);

    return(
        <View style={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks Heading Placeholder</Text>
            <Text>
                Lets put the task list here
            </Text>
        </View>
    );
}
//!SECTION

//*SECTION - Styles Section
const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 50, justifyContent: 'top', alignItems: 'center'},
    marg16:{marginBottom: 16},
})
//!SECTION