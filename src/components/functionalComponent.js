import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count == 10){
        Alert.alert('Count is now 10')
    }
  },[count])

  return (
    <View style={style.container}>
      <Text style={style.text}>This is a functional component: {count}</Text>
      
      <TouchableOpacity style={style.button} onPress={() => setCount(count + 1)}>
        <Text style={style.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default FunctionalComponent;
