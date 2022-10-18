import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Gcard from './Gcard';




const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select Drive
        </Text>
      );
    }
    return null;
  };
  const [g,setG] = useState([])

    async function getGrievance(){

        fetch('http://localhost:3001/getgrieve', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(res => res.json()).then(data => {setG(data)})
    }
    useEffect (() =>{getGrievance()},[])

    const [newg, setNewG] = useState("")
  return (
    <View>
    <View style={styles.container}>
      {renderLabel()}
      {/* <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Drive' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}/> */}
        <View style = {{borderWidth:1, marginTop:10, padding:16,borderRadius:5}}>
            <TextInput editable maxLength={500} placeholder="Describe your issue here" onChange={(text)=>setNewG(text)} />
        </View>
        <TouchableOpacity style = {{borderWidth:1, padding:10,marginTop:10,borderRadius:5, backgroundColor:"black"}} onPress = {()=>g.push({description : newg,status:2,postedOn : "06-10-2022"})}>
            <Text style = {{textAlign:"center",fontWeight:'bold', color:"white"}}>Submit</Text>
        </TouchableOpacity>
        <View style = {{marginTop:10}}> 
            <Text style = {{fontWeight:"bold"}}>Your Past Grievances</Text>
            <FlatList
        data={g}
        renderItem={ (item) => 
            <Gcard props = {item}/>
        }
        keyExtractor={item => item.drive_no}
      />
        </View>
        </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});