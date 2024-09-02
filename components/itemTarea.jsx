import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Button, Text, CheckBox} from 'react-native';

const Item = ({tarea, eliminarTarea, completarTarea}) => {

    const handleEliminar = (eliminar) => {
    
        console.log(eliminar);
        eliminarTarea(eliminar);
    };

    const handleCompletar = (completar) => {
    
        console.log(completar);
        completarTarea(completar);
    };

    return(
        <View style={styles.item}>
            <Text>{tarea.descripcion}</Text>
            <Text>{new Date(tarea.fecha).toLocaleString()}</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={tarea.completada}
                onValueChange={() => {handleCompletar(tarea)}}
                style={styles.checkbox}
                />
                <Text style={styles.label}>Completada</Text>
            </View>
            <Button onPress={() => {handleEliminar(tarea)}} title='Eliminar Tarea'/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
});

export default Item;
