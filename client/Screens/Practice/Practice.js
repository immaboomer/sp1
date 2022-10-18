import React, { useEffect, useState } from 'react'

import { View,Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Card from '../Dashboard/Card'
import PracticeCard from './PracticeCard'
// import Card from './Card'

export default function Practice({navigation}) {
    const [ann,setAnn] = useState([])

    async function getPractice(){

        fetch('http://localhost:3001/getallannouncements', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(res => res.json()).then(data => {setAnn(data)})
    }
    useEffect (() =>{getPractice()},[])
  return (
    <View style ={{minHeight:"100%"}}>
        <View>
        <View>
            {/* <Text style = {{fontSize:20, fontWeight:'bold', marginLeft:30}}>Hey Sruthi Naya P !</Text> */}
        </View>
        <View>
        
        <FlatList
        data={ann}
        renderItem={ (item) => 
            // <Card props={{alldata : item,name:item.item.drive_name, role:item.item.role,ddate:item.item.drive_date,package:item.item.salary,navigation}}/>
            <PracticeCard props={item}/>
          }
        // keyExtractor={item => item.drive_no}
      />
            {/* <PracticeCard props={{name:"Micro Focus", role:"Web Developer",ddate:"03-Mar-2022",package:"30000",navigation}}/> */}
            
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </View>
        </View>
    </View>
  )
}
