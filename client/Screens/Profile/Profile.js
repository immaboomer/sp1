import { useEffect, useState } from "react"
import { View,Text,StyleSheet, Image, TouchableOpacity, Button   } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default function Profile() {
    const [profile,setProfile] = useState()

    async function getProfileDetails(){

        fetch('http://localhost:3001/getprofile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(res => res.json()).then(data => {setProfile(data[0])})
    }
    useEffect (() =>{getProfileDetails()},[])
    const [cgpa,changeCGPA] = useState(false)
    return(
        <View style = {styles.wrapper}>
            {console.log(profile)}
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>Full Name</Text>
            <TextInput  placeholder={profile && profile.name?profile.name:""} style = {styles.inputBox} editable={false}  />
            </View>
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>Email Address </Text>
            <TextInput  placeholder={profile && profile.email_id?profile.email_id:""}  style = {styles.inputBox} editable={false}  />
            </View>
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>Roll Number</Text>
            <TextInput  placeholder={profile && profile.rollno?profile.rollno:""}  style = {styles.inputBox} editable={false}  />
            </View>
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>Academic Year</Text>
            <TextInput  placeholder={profile && profile.academic_year?profile.academic_year:""}  style = {styles.inputBox} editable={false}  />
            </View>
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>Placed ?</Text>
            <TextInput  placeholder="False" style = {styles.inputBox} editable={false}  />
            </View>
            <View style = {styles.wholeBox}>
            <Text style = {styles.heading}>CGPA</Text>
            <View style = {{flexDirection:"row", backgroundColor:"#d3d3d3",justifyContent:"space-between"}}>
            <TextInput  placeholder={profile && profile.cgpa?profile.cgpa:""} style = {styles.inputBox} editable={cgpa}  ></TextInput><TouchableOpacity style={{margin:5}} onPress = {()=>changeCGPA(!cgpa)}><Image source={require("../../assets/icons/pencil.png")} style = {{width:20,height:20}}/></TouchableOpacity>
            </View>
            </View>
            <View style = {{width:"80%",alignSelf:"center"}}>
            <Text style = {styles.heading}>Resume</Text>

            <TouchableOpacity style = {styles.btn}>
                <View>
                    <Text style = {{color:"white",textAlign:"center"}}>Download</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btn}>
                <View>
                    <Text style = {{color:"white",textAlign:"center"}}>Update</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  wholeBox :{flexDirection:"column", width:"80%", alignSelf:"center"},
  heading:{fontWeight:"bold",padding:2},
  inputBox :{backgroundColor:"#d3d3d3", padding:7},
  wrapper:{padding:10},
  btn:{backgroundColor:"black",margin:3, padding:8}
})