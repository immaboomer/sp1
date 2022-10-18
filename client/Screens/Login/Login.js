import { Text, TextInput, TouchableOpacity, View,StyleSheet, Image } from "react-native"

export const Login = () => {
    return(
        <View style = {styles.wrapper}>
            <View style = {styles.img}>
                <Image source={require("../../assets/pictures/Nerd-amico.png")}  style = {styles.picture} />
            </View>
            <View style = {styles.det}>
                <View>
                    <Text style = {{textAlign:"center", fontWeight:"bold", fontSize:30, padding:0}}>Sign In</Text>
                </View>
                <View style = {styles.labelBox}>
                    <Image source={require("../../assets/icons/at.png")} style = {{resizeMode:"contain",height:25,flex:1}} />
                    <TextInput placeholder="Email Address" style  ={{borderBottomWidth:1, borderBottomColor:"#cfcfcf",width:"80%",flex:4}}/>
                </View>
                <View style = {styles.labelBox}>
                    <Image source={require("../../assets/icons/password.png")} style = {{resizeMode:"contain",height:25,flex:1}} />
                    <TextInput placeholder="Password" secureTextEntry={true} style  ={{borderBottomWidth:1, width:"80%",borderBottomColor:"#cfcfcf",flex:4}}/>
                </View>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {{color:"white", textAlign:"center"}}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {{textAlign:"center"}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:"100%"
    },
    img:{
        flex:35,
        width:"95%",
        // marginTop:"10%",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center"
    },
    det:{
        flex:1,
        width:"90%",
        alignSelf:"center"
    },
    picture:{width:"100%",height:"100%",alignSelf:"center"},
    labelBox :{
        flexDirection:"row",
        marginTop:20
    },
    btn:{
        backgroundColor:"#28282B",
        width:"95%",
        alignSelf:"center",
        margin:"15%",
        padding:"3%"
    }
    
})