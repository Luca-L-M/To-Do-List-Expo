import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Button, Text} from 'react-native';
import {CheckBox} from '@rneui/themed';

const Item = ({tareas, tarea, eliminarTarea}) => {

    const handleEliminar = () => {
    
        console.log(tarea);
        const tareaEliminar = tareas.indexOf(tarea)
        eliminarTarea(tareas.splice(tareaEliminar, 1, null));
    };

    return(
        <View style={styles.item}>
            <Text>{tarea.descripcion}</Text>
            <Text>{new Date(tarea.fecha).toLocaleString()}</Text>
            <CheckBox
            title={'Completada'}
            checked={tarea.completada}
            onPress={() => tarea.completada = !(tarea.completada)}
            />
            <Button onPress={() => {handleEliminar}} title='Eliminar Tarea'/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
});

export default Item;
