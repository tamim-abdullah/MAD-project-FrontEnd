import React from "react";
import { View, Text, StyleSheet} from "react-native";

const App = () =>{
  return(
    <View style= {styles.mainContainer}>
      <Text style={styles.textContainer}>
        HEY there!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    fontWeight: "700",
    fontSize: 30,
    color: "red"
  }
})

export default App;