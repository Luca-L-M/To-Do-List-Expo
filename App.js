import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput, FlatList, Button, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListaTareas from './components/listaTareas.jsx';

const windowHeight = Dimensions.get('window').height;
const margin = windowHeight / 10;
const padding = windowHeight / 12;

export default function App() {
  const [Tareas, setTareas] = useState([]);
  const [Texto, setTexto] = useState('');

  function agregarTarea() {
    if (Texto !== '') {
      let nuevaTarea = {
        descripcion: Texto,
        completada: false,
        fecha: Date.now(),
      };
      // Mete la tarea en el array
      setTareas([...Tareas, nuevaTarea]);
      saveTareas([...Tareas, nuevaTarea]);
      setTexto('');
    }
  }

  function ChangeTexto(texto) {
    setTexto(texto);
  }

  function eliminarTarea(eliminar) {
    console.log(eliminar);
    const TareasEliminadas = Tareas.filter(tarea => tarea !== eliminar)
    setTareas(TareasEliminadas);
    saveTareas(TareasEliminadas);
  }

  function completado(completar) {
    console.log(completar);
    const TareasCompletadas = Tareas.filter(tarea => tarea !== eliminar)
    setTareas(TareasCompletadas);
    saveTareas(TareasCompletadas);
  }

  // Guardar items en AsyncStorage
  const saveTareas = async (nuevaTareas) => {
    try {
      await AsyncStorage.setItem('Tareas', JSON.stringify(nuevaTareas));
    } catch (error) {
      console.error('Failed to save tarea to AsyncStorage:', error);
    }
  };

  // Cargar items desde AsyncStorage al iniciar la app
  const loadTareas = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('Tareas');
      if (storedItems) {
        setTareas(JSON.parse(storedItems));
      }
    } catch (error) {
        console.error('Failed to load tareas from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    loadTareas();
  }, []);

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
      <ListaTareas tareas={Tareas} eliminarTarea={eliminarTarea}/>
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