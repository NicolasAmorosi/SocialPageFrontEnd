import { View, Image, Text } from "react-native";

export default function Suggestion() {
    return(
        <View className=" w-[100%]">
            <View className=" rounded-lg m-[10] p-[10] border-[2px] border-gray-300 flex flex-col  space-y-[5]">
                <Text>Suggestion</Text>
                <Image className=" w-[100%] h-[400] rounded-lg" source={require("../../assets/post.jpg")}></Image>
            </View>
        </View>
    )
}