import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, List, Divider, TextInput, Button, IconButton} from 'react-native-paper';

//*SECTION - Task Screen Page
export default function TasksScreen() {
    //NOTE - MOCK DATA START
    const [tasks, setTasks] = React.useState([
        { id: 1, text: 'Finish assessment'},
        { id: 2, text: "Review git commits"},
        { id: 3, text: "Test add new task"},
    ]);

    //ANCHOR - Task Add
    const [taskText, setTaskText] = React.useState('');
    const [editingId, setEditId] = React.useState(null);
    const addTask = () => {
        const trimmed = taskText.trim();
        if (!trimmed) {
        Alert.alert('Validation', 'Task cannot be empty.');
        return;
        }
        if (trimmed.length > 30) {
        Alert.alert('Validation', 'Task must be 30 characters or less.');
        return;
        }
        setTasks((prev) => [...prev, { id: Date.now(), text: trimmed }]);
        setTaskText('');
        //Keyboard.dismiss();
    };

    //ANCHOR - Edit Item
    const startEdit = (item) => {
        setEditId(item.id);
        setTaskText(item.text);
    }

    // ANCHOR - Validation helper 
    // TODO - ADD THIS TO THE OTHER VALIDATION
    const validate = (value) => {
        const trimmed = value.trim();
        if (!trimmed) {
        Alert.alert('Validation', 'Task cannot be empty.');
        return null;
        }
        if (trimmed.length > 30) {
        Alert.alert('Validation', 'Task must be 30 characters or less.');
        return null;
        }
        return trimmed;
    };

    //ANCHOR - Update Task

    const updateTask = () => {
        const trimmed = validate(taskText);
        if(!trimmed) return; //If they made it empty don't do anything
        setTasks((prev) => prev.map((t) => (t.id === editingId ? {...t, text: trimmed} : t)))
        setEditId(null);
        setTaskText('');
        //Keyboard dissmiss
    }

    return(
        <View style={styles.container}>
            <Text variant='headlineMedium' styles={styles.marg16}>
                Tasks List</Text>
            {/* TASK FORM */} 
            <View style={styles.formRow}>
                <TextInput 
                    label="Add a task"
                    value={taskText}
                    onChangeText={setTaskText}
                    mode="outlined"
                    left={<TextInput.Icon icon="pencil" />}
                    style={styles.input}
                    maxLength={30}
                />
                {editingId ? (
                    <Button mode="contained" onPress={updateTask} accessibilityLabel='Update Task Button'>
                        Update Task
                    </Button>
                    ) : (
                    <Button mode="contained" onPress={addTask} accessibilityLabel='Add Task Button'>
                        Add Task
                    </Button>
                )}
            </View>

            {/* TASK LIST */}    
            <List.Section>
                {tasks.length === 0 && <Text>No Tasks Added</Text>}
                {tasks.map((item, index) => (
                    <View key={item.id}>
                        <List.Item 
                            title={item.text}
                            onPress={() => startEdit(item)}
                            left={props => 
                                <IconButton
                                {...props} 
                                icon={editingId === item.id ? 'pencil' : 'checkbox-blank-circle-outline'} />}
                            accessibilityLabel={`Task ${item.text}`}
                            right={(props) => (
                                <IconButton
                                    {...props}
                                    icon="delete-outline"
                                    onPress={() => setTasks((prev) => prev.filter((t) => t.id !== item.id))
                                    }
                                />
                            )}
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
    formRow: {flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 16 },
    marg16:{marginBottom: 16},
    input: {flex: 1, margin: 5}
})
//!SECTION