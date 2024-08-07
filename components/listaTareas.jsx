import React from 'react';
import {StyleSheet, View, Dimensions, FlatList, Button, Text} from 'react-native';
import {CheckBox} from '@rneui/themed';

const Item = ({descripcion, fecha, completada, eliminarTarea}) => (
  <View style={styles.item}>
    <Text>{descripcion}</Text>
    <Text>{new Date(fecha).toLocaleString()}</Text>
    <CheckBox
      title={'Completada'}
      checked={completada}
      onPress={() => completada = !(completada)}
    />
    <Button onPress={() => {eliminarTarea()}} title='Eliminar Tarea'/>
  </View>
);

const ListaTareas = (data, eliminarTarea) => {
  console.log(data.data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({item}) => <Item descripcion={item.descripcion} fecha={item.timestampCreation} completada={item.completada} eliminarTarea={eliminarTarea}/>}
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
