import React, { useEffect, useState } from 'react'
import { View,Text, Image, TouchableOpacity, FlatList } from 'react-native'
import Card from './Card'

export default function Dashboard({navigation}) {
    const [drives,setDrives] = useState([])

    async function getDriveDetails(){

        fetch('http://localhost:3001/getalldrives', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(res => res.json()).then(data => {setDrives(data)})
    }
    useEffect (() =>{getDriveDetails()},[])
  return (
    <View style ={{minHeight:"100%"}}>
        <View>
        <View>
            <Text style = {{fontSize:20, fontWeight:'bold', marginLeft:30}}>Hey Pradeep !</Text>
        </View>
        <View>
            {/* <Text>hELLO</Text> */}
            <FlatList
        data={drives}
        renderItem={ (item) => 
            <Card props={{alldata : item,name:item.item.drive_name, role:item.item.role,ddate:item.item.drive_date,package:item.item.salary,navigation}}/>
          }
        keyExtractor={item => item.drive_no}
      />
        </View>
        </View>
    </View>
  )
}
