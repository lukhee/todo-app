import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const TodoInput = ({ onAddTodo }) => {
  const [enteredText, setText] = useState('');

  const changetext = (value) => {
    setText(value);
  };
  return (
    <View style={styles.textContainer}>
      <TextInput
        value={enteredText}
        onChangeText={changetext}
        placeholder="type here"
        style={styles.textField}
      />
      <Button title="Add" onPress={onAddTodo.bind(this, enteredText)} />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    padding: 5,
    borderColor: 'black',
    width: '70%',
    borderWidth: 4,
    borderColor: '#20232a',
  },
});
