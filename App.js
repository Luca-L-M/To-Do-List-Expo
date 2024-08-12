import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput, FlatList, Pressable, Dimensions} from 'react-native';
import ListaTareas from './components/listaTareas.jsx';

const windowHeight = Dimensions.get('window').height;
const margin = windowHeight / 10;
const padding = windowHeight / 12;

export default function App() {
  const [Tareas, setTareas] = useState([]);
  const [Texto, setTexto] = useState('');

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       '@listaTareas',
  //       JSON.stringify(Tareas),
  //     );
  //   } catch (e) {
  //     console.log('error saving data ', e);
  //   }
  // };

  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@listaTareas');
  //     if (value !== null){
  //       setTareas(JSON.parse(value));
  //     }
  //     else console.log('No se encontro el Storage');
  //   } catch (e) {
  //     console.log('error retriving data ', e);
  //   }
  // };

  function agregarTarea() {
    if (Texto !== '') {
      let nuevaTarea = {
        descripcion: Texto,
        completada: false,
        timestampCreacion: Date.now(),
      };
      // Mete la tarea en el array
      setTareas([...Tareas, nuevaTarea]);
      setTexto('');
    }
  }

  function ChangeTexto(texto) {
    setTexto(texto);
  }

  function ChangeTareas(tareas) {
    setTareas(tareas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <TextInput
        id="inputTarea"
        placeholder="Añadir tarea"
        onChangeText={ChangeTexto}
        value={Texto}
      />
      <Button onPress={agregarTarea} title='Agregar Tarea'/>
      <ListaTareas tareas={Tareas} eliminarTarea={ChangeTareas}/>
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
    paddingHorizontal: padding, // Ajusta el padding horizontal según el valor calculado
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});