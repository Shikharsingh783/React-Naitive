import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { imageUri } from '../data'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;
const scale = Dimensions.get('window').scale;

console.log('Dimensions', screenHeight, screenWidth, fontScale, scale);

const BasicComponent = () => {
  const [useHeight, setHeight] = useState(200); // Start from 200 height

  const increaseHeight = () => {
    setHeight(prev => prev + 50);
  };

  const decreaseHeight = () => {
    setHeight(prev => (prev > 100 ? prev - 50 : prev)); // Don't go below 100
  };

  const insets = useSafeAreaInsets();

  const onLayout = e => {
    console.log(e.nativeEvent);
  };

  return (
    <View onLayout={onLayout} style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.text}>BasicComponent</Text>

      <TouchableOpacity style={styles.button} onPress={increaseHeight}>
        <Text style={styles.buttonText}>Up</Text>
      </TouchableOpacity>

      <Image source={{ uri: imageUri }} style={[styles.image, { height: useHeight }]} />

      <TouchableOpacity style={styles.button2} onPress={decreaseHeight}>
        <Text style={styles.buttonText}>Down</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 50,
    width: 130,
    borderRadius: 10,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 50,
    width: 130,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    marginTop: 40,
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});

export default BasicComponent;
