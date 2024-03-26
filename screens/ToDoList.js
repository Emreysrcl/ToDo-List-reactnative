import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'; 

export default function ToDoList() {
  const [list_item, setListitem] = useState(''); 
  const [list_items, setListitems] = useState([]); 

  const addList_item = () => {
    if (list_item.length > 0) {
      setListitems([...list_items, { id: list_items.length, list_item: list_item, active: true }]);
      setListitem(''); 
    }
  };

  const toggleList = (id) => {
    const updatedListitem = list_items.map(item =>
      item.id === id ? { ...item, active: !item.active } : item
    );
    setListitems(updatedListitem);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter a to do'
        onChangeText={(text) => setListitem(text)}
        value={list_item} 
      />
      <TouchableOpacity style={styles.button} onPress={addList_item}>
        <Text style={styles.buttonText}>Add To Do</Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 20 }}
        data={list_items}
        renderItem={({ item }) => (
          <View style={styles.task}>
           <Text style={{ textDecorationLine: item.active ? 'none' : 'line-through' }}>{item.list_item}</Text>
           <TouchableOpacity onPress={() => toggleList(item.id)}>
            <Text style={[styles.toggleButton, { backgroundColor: item.active ? 'green' : 'red' }]}>
              {item.active ? '✓' : '✓'}
            </Text>
          </TouchableOpacity>

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  toggleButton: {
    padding: 5,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
  },
});
