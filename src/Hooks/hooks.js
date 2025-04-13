import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useMemo, useState } from 'react'
import UseLayoutEffect from './useLayoutEffect'

const Hooks = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const expensiveValue = useMemo(() => {
        console.log('Calculating...')
        let total = 0
        for(let i = 0; i< 1e7 ; i ++){
            total += i
        }
        return total
    }, [count, text])

  return (
      <View style={styles.container}>
        <Text>Expensive Calculation {expensiveValue}</Text>
        <Button title="Increase Count" onPress={() => setCount(count + 1)}/>
        <Button title="Update Input" onPress={() => setText(text + '!')}/>
        <Text>Text : {text} </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom : 25,
        flex: 1,
    }
})

export default Hooks
