import React from 'react';
import {StyleSheet, View, Dimensions, FlatList, Button, Text} from 'react-native';
import {CheckBox} from '@rneui/themed';

const Item = ({descripcion, fecha, completada, handleEliminar, handleCompletado}) => {

    return (
        <View style={styles.item}>
            <Text>{descripcion}</Text>
            <Text>{new Date(fecha).toLocaleString()}</Text>
            <CheckBox
            title={'Completada'}
            checked={completada}
            onPress={() => completada = !(completada)}
            />
            <Button onPress={handleEliminar} title='Eliminar Tarea'/>
        </View>
    )
};

export default Item;