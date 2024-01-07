import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import dayjs from 'dayjs';

export default function App() {

  const [fechaNacimiento, setFechaNacimiento] = useState([]);
  const [edad, setEdad] = useState("");
  console.log(fechaNacimiento)


  const calcularEdad =  function() {
    const newFecha=fechaNacimiento.concat(edad)
    const hoy = dayjs();
    const fechaNac = dayjs(fechaNacimiento);
  
    const edadCalculada = hoy.diff(fechaNac, 'year');
    setFechaNacimiento(newFecha)
    setEdad(edadCalculada);

  };
  

  return (
    <View style={styles.container}>
      <Text>Ingrese su fecha de nacimiento:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={(text) => setFechaNacimiento(text)}
      />
      <Button title="Calcular Edad" onPress={calcularEdad} />
      {edad !== null && <Text>Su edad es: {edad} años.</Text>}
      <FlatList 
      data={fechaNacimiento}
      renderItem={({edad})=>
      <View>
        <Text>{edad}</Text>
      
      
      </View>
}
/>
      <StatusBar style="auto" />
    
    </View>
  );
  }  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
});
