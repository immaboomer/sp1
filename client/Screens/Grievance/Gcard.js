import React from 'react'
import { View,Text } from 'react-native'

export default function Gcard(props) {
  console.log(props.props.item)
  return (
    <View style = {{borderWidth:1, padding:10,marginTop:5, borderRadius:5}}>
                {/* <Text style = {{fontWeight:"bold"}}>Deloitte USI</Text> */}
                <Text style = {{}}>{props.props.item.description}</Text>
                <Text style = {{fontWeight:"bold",marginTop:2}}>Status : 
                <Text style = {{fontWeight:"bold",color:"orange",marginT:2}}>{props.props.status === 2 ? "Solved":" Pending"}</Text></Text>
                <Text style = {{fontWeight:"bold",margin:2}}>Posted on : <Text style = {{fontWeight:"200"}}>03-10-2022</Text></Text>
            </View>
  )
}
