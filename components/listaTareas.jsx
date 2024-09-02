import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, FlatList, Button, Text} from 'react-native';
import Item from './itemTarea.jsx';

const ListaTareas = ({tareas, eliminarTarea, completarTarea}) => {  

  return (
    
    <View style={styles.container}>
      {console.log(tareas)}
      <FlatList
      data={tareas}
      renderItem={({item}) => <Item tarea={item} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>}
      />
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default ListaTareas
