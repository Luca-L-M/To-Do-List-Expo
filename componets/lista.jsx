import React from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';

const ListaTareas = (data) => {
  const windowWidth = Dimensions.get('window').width;
  const diametro = windowWidth * 0.6;
  const tamanoFuente = diametro / 5;

  const Item = ({description}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{description}</Text>
    </View>
  );
  return (
    <View>
        <FlatList
            data={data}
            renderItem = {({item}) => <Item description={item.descripcion}/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ListaTareas;
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