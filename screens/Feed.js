import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Feed = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Go to details</Text>
            <Button title='Go to Details' onPress={()=>props.navigation.navigate('Detail')} />
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
