import React from 'react'
import { Image, View,Text, Button } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function DriveDetails(props) {
  const data = props.route.params.data.props.alldata.item
  console.log(data)
  const [selected, setSelected] = React.useState("");
  const datas = [{key:'1',value:'Opted In'},{key:'2',value:'Opted Out'},{key:'3',value:'Not Eligible'},];
  
  const updatePreference = () => {
    fetch("http://localhost:3001/addChoice", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drive: data.drive_no,
        email:"21mx117@psgtech.ac.in",
        choice : selected,
        academicYear : "2021",
        role : data.role
    }),
  }).then(res => {alert("Updated")});
  }

  return (
    <View style = {{padding:4, margin:2}}>
        <View>
        <Text style  ={{fontSize:20, fontWeight:"bold"}}>Drive Name : <Text style  ={{fontSize:20,fontWeight:"300"}}>{data.drive_name}</Text></Text> 
        <Text style  ={{fontSize:20, fontWeight:"bold"}}>Role : <Text style  ={{fontSize:20,fontWeight:"300"}}>{data.role}</Text></Text> 
        <Text style  ={{fontSize:20, fontWeight:"bold"}}>Salary : <Text style  ={{fontSize:20,fontWeight:"300"}}>{data.salary}</Text></Text> 
        <Text style  ={{fontSize:20, fontWeight:"bold"}}>Location : <Text style  ={{fontSize:20,fontWeight:"300"}}>{data.location}</Text></Text> 
        <Text style  ={{fontSize:20, fontWeight:"bold"}}>Description : <Text style  ={{fontSize:20,fontWeight:"300"}}>{data.description}</Text></Text> 
        </View>
        <View style = {{marginTop:5}}>
        <SelectList setSelected={setSelected} data={datas} onSelect={() => console.log(selected)} />
        <TouchableOpacity style ={{borderWidth:1, padding:7,borderRadius:3, margin:3, backgroundColor:"black"}} onPress = {() => updatePreference()}>
          <Text style = {{textAlign:"center",color:"white"} }>UPDATE</Text>
        </TouchableOpacity>
        
        </View>
    </View>
  )
}
