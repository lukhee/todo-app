import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoView = ({ title, deleteTodo }) => {
  return (
    <TouchableOpacity onPress={deleteTodo}>
      <View style={styles.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoView;

const styles = StyleSheet.create({
  todo: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
