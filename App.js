import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Pressable, Dimensions} from 'react-native';
import ListaTareas from './componets/listaTareas';

const windowHeight = Dimensions.get('window').height;
const margin = windowHeight / 10;
const paddin = windowHeight / 12;

export default function App() {
  const [Tareas, setTareas ]= useState();
  const [Text, setText] = useState('');

  function agregarTarea(text) {
    console.log(text)
    if (text !== '') 
    {
      let nuevaTarea = {
        descripcion: text,
        completada: false,
        timestampCreacion: Date.now(),
      };
      //Mete la tarea en el array
      setTareas([...tareas, nuevaTarea]);
      console.log('funca el agregar tarea')
    }
  }
  const eliminarTarea = (eliminar) => {
    setTareas(Tareas.filter(tarea => tarea !== eliminar));
  };

  function ChangeText(text) {
    setText(text);
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Tareas</Text>
      <TextInput id="inputTarea" placeholder="Añadir tarea" onChangeText={ChangeText(Text)} value={Text}/>
      <Button onPress={() => {agregarTarea(Text)}} title='Agregar Tarea'/>
      <ListaTareas data={Tareas} eliminarTarea={eliminarTarea}/>
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