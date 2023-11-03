import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button} from "react-native";

const LogInPage = () =>{   
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = () =>{
        if(email === "abc" && pass === "123"){
            setIsLoggedIn(true)
            console.log(email)
        }
    }

    const showContent =()=>{
        return(
            <>
            <Text> EMAIL:</Text>
            <TextInput style={styles.Input} onChangeText={setEmail}/>
            <Text> PASSWORD:</Text>
            <TextInput style={styles.Input} onChangeText={setPass}  secureTextEntry={true}/>
            <Button title="Submit" onPress={handleSubmit}/>
            </>
        )
    }
    const showSuccess =()=>{
        return(
            <>
                <Text>Successfully logged in!</Text>
            </>
        )
    }

    return(
        <View>
            {!isLoggedIn?
                showContent():showSuccess()
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        height: 70,
        backgroundColor: 'grey'
    },
    Input:{
        backgroundColor: 'white',
        borderRadius: 2,
        borderWidth: 2,
        width: 300,
        borderColor: 'red'
    }
})


export default LogInPage;