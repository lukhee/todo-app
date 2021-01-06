import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import TodoView from './components/todoView';
import TodoInput from './components/todoInput';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTodoHandler = (value) => {
    setTodos((previousValue) => [
      ...previousValue,
      { id: Math.random().toString(), value: value },
    ]);
    setShowModal(false)
  };

  const deleteHandler = (id) => {
    setTodos((initialTodos) => initialTodos.filter((todo) => todo.id !== id));
  };

  const cancelModalHandler = () => {
    setShowModal(false)
  }

  return (
    <View style={styles.container}>
      <Button title='Add Todo' onPress={()=> setShowModal(true)} />
      <TodoInput onAddTodo={addTodoHandler} showModal={showModal} closeModal={cancelModalHandler} />
      <View style={styles.todosContainer}>
        <Text style={styles.title}> Todos </Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoView
              title={item.value}
              deleteTodo={() => deleteHandler(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  todosContainer: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    minHeight: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
});
