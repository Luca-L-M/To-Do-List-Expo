import React from 'react';
import { StyleSheet, View, Dimensions, FlatList, Button} from 'react-native';
import { CheckBox } from '@rneui/themed';

const Item = ({tarea, eliminarTarea}) => (
  <View style={styles.item}>
    <Text>{tarea.descripcion}</Text>
    <Text>{tarea.timestampCreation}</Text>
    <CheckBox
      title={'Completada'}
      checked={tarea.completada}
      onPress={() => tarea.completada = !(tarea.completada)}
    />
    <Button onPress={() => {eliminarTarea(Text)}} title='Eliminar Tarea'/>
  </View>
);

const ListaTareas = (data, eliminarTarea) => {
  data.preventDefault();
  return (
    <View style={styles.container}>
        <FlatList
            data={data}
            eliminarTarea={eliminarTarea}
            renderItem={({item}) => <Item tarea={item}/>}
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
