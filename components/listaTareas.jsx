import React from 'react';
import {StyleSheet, View, Dimensions, FlatList, Button, Text} from 'react-native';
import Item from './Item.jsx';

const ListaTareas = ({data, handleTareas}) => {
  const tareas = data.data;

  const handleEliminar = (eliminar) => {
    console.log(eliminar);
   if(eliminar !== '') {
     handleTareas(tareas.filter(tarea => tarea !== eliminar));
     _storeData();
   }
}

  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        renderItem={({item}) => <Item descripcion={item.descripcion} fecha={item.timestampCreation} completada={item.completada} handleEliminar={handleEliminar(item)}/>}
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

export default ListaTareas;
