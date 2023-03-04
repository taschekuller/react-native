import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from "react"
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandBox';

export default function App() {

    const [todos, setTodos] = useState([
        { text: "buy a coffee", key: "1" },
        { text: "create an app", key: "2" },
        { text: "watch a tutorial", key: "3" }
    ])

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    }

    const submitHandler = (text) => {
        if (text.length > 2) {
            setTodos((prevTodos) => {
                return [
                    ...prevTodos,
                    { text: text, key: Math.random().toString() },
                ]
            })
        } else {
            Alert.alert('OOPS!', "Todoos Must be at least 3 chars long", [
                { text: "Got it!", onPress: () => console.log("Alert closed.") }
            ])
        }

    }

    return (
        // <Sandbox />
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            // console.log("Dismissed keyboard.")
        }}>
            <View style={styles.container}>
                <Header />
                <AddTodo
                    submitHandler={submitHandler}
                />
                <View style={styles.content}>
                    {/* to form */}
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        // backgroundColor:"lightblue",
        flex:1, //takes the whole space in vertical
    },
    list: {
        marginTop: 12,
        // backgroundColor:"lightgreen",
        flex:1,
    }
});
