import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, List, Divider} from 'react-native-paper';

//*SECTION - Task Screen Page
export default function TasksScreen() {
    //MOCK DATA START
    const [tasks, setTasks] = React.useState([
        { id: 1, text: 'Finish assessment'},
        { id: 2, text: "Review git commits"},
        { id: 3, text: "Test add new task"},
    ]);

    return(
        <View style={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks List</Text>
            <List.Section>
                {tasks.length === 0 && <Text>No Tasks Added</Text>}
                {tasks.map((item, index) => (
                    <View key={item.id}>
                        <List.Item 
                            title={item.text}
                            left={props => <List.Icon {...props} icon="checkbox-blank-circle-outline" />}
                            accessibilityLabel={`Task ${item.text}`}
                        />
                        {index < tasks.length - 1 && <Divider style={styles.marg16}/>}
                    </View>
                ))}
            </List.Section>
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