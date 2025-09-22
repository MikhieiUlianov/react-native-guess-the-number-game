import { Pressable, View } from "react-native-web"

 const PrimaryButton = ({children}) => {
    return <Pressable>
        <View>
        <Text>
            {children}
        </Text>
    </View>
    </Pressable>
}

export default PrimaryButton