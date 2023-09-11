import { View, Text, Image } from "react-native";

export default function Result(){
    return(
        <View className=" w-[100%]">
            <View className=" rounded-lg m-[10] p-[10] border-[2px] border-gray-300 flex flex-row items-center space-x-[10]">
                <Image className=" w-[50] h-[50] rounded-full" source={require("../../assets/profilePhoto.jpg")}></Image>
                <Text className=" text-lg">Result</Text>
            </View>
        </View>
    )
}