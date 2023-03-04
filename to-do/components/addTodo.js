import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from "react"

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState("")

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add new todo..'
                onChangeText={changeHandler}
            >
            </TextInput>
            <Button 
                onPress={()=>{
                    submitHandler(text)
                }}
                title="Add Todo"
                color="coral"
                style={styles.addButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 48,
        padding:12,
        marginTop:24,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})