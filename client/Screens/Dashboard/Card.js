import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

export default function Card({props}) {

    return (
    <TouchableOpacity style = {styles.cardWrapper} onPress = {()=> props.navigation.navigate('DriveDetails',{data : {props}})}> 
        <View>
            <Text style = {{fontSize:20, fontWeight:"bold"}}>{props.name}</Text>
        </View> 
        <View>
            <Text style = {styles.side}>Role : <Text style = {styles.dats}>{props.role}</Text></Text>
        </View>
        <View>
            <Text style = {styles.side}>Package : ₹<Text style = {styles.dats}>{props.package}/-</Text></Text>
        </View>
        <View>
            <Text style = {styles.side}>Drive Date : <Text style = {styles.dats}>{props.ddate}</Text></Text>
        </View>
    </TouchableOpacity>
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
