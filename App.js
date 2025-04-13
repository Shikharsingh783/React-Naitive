import React from 'react';
import FunctionalComponent from './src/components/functionalComponent';
import { View, StyleSheet, Text } from 'react-native';
import BasicComponent from './src/components/BasicComponent';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Hooks from './src/Hooks/hooks';

const App = () => {
    return (
        <SafeAreaProvider>
        <View
        style= {styles.container}
        >
             {/* <FunctionalComponent /> */}
             <Hooks />
             {/* <BasicComponent /> */}
        </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  flex2: {
    flex: 1.5,
    backgroundColor: 'blue',
  },
});

export default App;