import { useState } from "react"
import { TextInput, View } from "react-native-web"
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    const [] = useState();
  return (
   <View>
    <TextInput/>
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
   </View>
  )
}

export default StartGameScreen