import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const UseLayoutEffect = () => {
    const [Dimensions, setDimensions] = useState({width : 0, height : 0})
  return (
    <View style={styles.container}>
      <View style = {styles.box}>
        <Text>Box Dimension: </Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    box : {
        height : 100,
        width : 100,
        backgroundColor : 'blue'
    }
})

export default UseLayoutEffect