import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterPage = ( props: any) => {
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    // shift enter -> auto import
    const increaseHandler = () =>{
        // counter = counter+ 1;
        setCounter(counter+1)
        console.log("Current Value: ", counter);
    }
    const decreaseHandler = () => {
        // counter = counter - 1;
        setCounter(counter-1)
        console.log("Current Value: ", counter)
    }
    const resetHandler = () => {
        setCounter(0)
    }

    const navHandle = () => {
        props.navigation.navigate("Login")
    }

    return (

        <View style={style.mainController}>
            <Text style={style.counterContainer}>{counter} </Text> 
            <View style={style.buttonContainer}>
                <Button title = "increase" onPress={increaseHandler}></Button>
                <Button title = "decrease" onPress={decreaseHandler}></Button>
                <Button title = "reset" onPress={resetHandler}></Button>
                <Button title="Login" onPress={navHandle}></Button>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainController:{
        // backgroundColor: "black",
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
    counterContainer:{
        fontSize: 80,
        fontWeight: "700",
        color: "gold"
    },
    buttonContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        height: 60,
        gap: 10
    },
    buttonLeft:{
        height: 30,
        width: 40,
        marginRight: 10
    }
})


export default CounterPage; //component name starts Capital