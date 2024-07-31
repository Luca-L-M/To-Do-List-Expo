import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Pressable} from 'react-native';

export default function App() {
  const [tareas, setTareas ]= useState();

  function agregarTarea() {
    let tarea = document.getElementById('inputTarea').value
    if (tarea !== '') 
    {
      let nuevaTarea = {
        descripcion: tarea,
        completada: false,
        timestampCreacion: Date.now(),
        timestampTachado: null
      };
      //Mete la tarea en el array
      tareas.push(nuevaTarea);
      actualizarListaTareas();
      document.getElementById('inputTarea').value = '';
    }
  }

  function tareaMasRapida() {
    let tareaMasRapida = null;
    let rapido = 0;
    tareas.forEach(function(tarea) { 
      if(tarea.completada)
      {
        if (rapido < (tarea.timestampTachado - tarea.timestampCreacion))
        {
          rapido = (tarea.timestampTachado - tarea.timestampCreacion);
          tareaMasRapida = tarea;
        }
      }
    })
    if (tareaMasRapida != null) {
      alert(`La tarea más rápida en completarse fue: "${tareaMasRapida.descripcion}"`);
    } else {
      alert('No hay tareas completadas para mostrar.');
    }
  }

  function actualizarListaTareas() {
    let listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';

    tareas.forEach(function(tarea, indice) 
    {
      let li = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = tarea.completada;
      checkbox.addEventListener('change', function() {
        tarea.completada = checkbox.checked;
        tarea.timestampTachado = tarea.completada ? Date.now() : null;
        actualizarListaTareas();
      });
      
      let textoTarea = document.createElement("p");
      textoTarea.innerHTML = tarea.descripcion;
      if(tarea.completada)
      {
        textoTarea.style.textDecoration = "line-through";
        tarea.timestampTachado = Date.now();
      }
      
      li.appendChild(checkbox);
      li.appendChild(textoTarea);
      
      listaTareas.appendChild(li);
    });
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Tareas</Text>
      <TextInput type="text" id="inputTarea" placeholder="Añadir tarea"/>
      <Button onPress={() => {agregarTarea()}} title='Agregar Tarea'/>
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
    justifyContent: 'center',
  },
});