import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Pressable, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const margin = windowHeight / 10;
const paddin = windowHeight / 12;
export default function App() {
  const [tareas, setTareas ]= useState();
  const [text, onChangeText] = useState('');

  function agregarTarea(text) {
    if (text !== '') 
    {
      let nuevaTarea = {
        descripcion: text,
        completada: false,
        timestampCreacion: Date.now(),
        timestampTachado: null
      };
      //Mete la tarea en el array
      tareas.push(nuevaTarea);
      actualizarListaTareas();
    }
  }


  return (
    <View style={styles.container}>
      <Text>Lista de Tareas</Text>
      <TextInput id="inputTarea" placeholder="Añadir tarea" onChangeText={onChangeText} value={text}/>
      <Button onPress={() => {agregarTarea(text)}} title='Agregar Tarea'/>
      <Button onPress={() => {tareaMasRapida()}} title='Tarea más rápida'/>
      <FlatList id="listaTareas"
      renderItem={({item}) => <Text>{item}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexWrap: 'column',
    justifyContent: 'space-between',
    marginTop: margin,
  },
});