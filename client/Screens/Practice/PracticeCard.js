    import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

export default function PracticeCard({props}) {
    console.log("Prop",props)
    return (
    <View style = {styles.cardWrapper}>
        <Text>Post by : <Text style = {{fontWeight:"bold",textDecorationLine:"underline"}}>{props.item.postedBy}</Text> on {props.item.date}</Text>
        <Text>{props.item.question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cardWrapper: {
        borderWidth:1,
        padding:9,
        margin:6,
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        backgroundColor:"white"
    },
    side:{
        fontWeight:"bold"
    },
    dats :{
        fontWeight:"normal"
    }
})
