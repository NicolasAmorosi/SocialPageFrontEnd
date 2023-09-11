import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';

import TopBar from '../components/TopBar';
import Result from '../components/Result';
import Suggestion from '../components/Suggestion';

export default function SearchPage() {
    return (
        <SafeAreaView>
            <View className=" w-[100%]">
                <TextInput placeholder='Search' className=" rounded-lg m-[10] p-[10] text-lg border-[2px] border-gray-300"></TextInput>
            </View>
            <ScrollView>
                <Result />
                <Suggestion />
            </ScrollView>
        </SafeAreaView>
    );
}