import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const TodoInput = ({ onAddTodo, showModal, closeModal }) => {
  const [enteredText, setText] = useState('');

  const changetext = (value) => {
    setText(value);
  };

  const onAddTodoHandler = () => {
    onAddTodo(enteredText);
    setText('');
  };

  const closeModalHandler = () => {
    closeModal();
    setText('');
  };

  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.textContainer}>
        <TextInput
          value={enteredText}
          onChangeText={changetext}
          placeholder="type here"
          style={styles.textField}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="red" onPress={closeModalHandler} />
          <Button title="Add" onPress={onAddTodoHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    padding: 5,
    borderColor: 'black',
    width: '70%',
    borderWidth: 4,
    borderColor: '#20232a',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
