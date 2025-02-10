import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from "../components/imageSlider";
import BodyParts from "../components/bodyParts";
// import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5 pt-20 " edges={['top']}>
            <StatusBar style="dark" />
            {/* punchline and avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-700">
                        READY TO
                    </Text>
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-rose-700">
                        WORKOUT
                    </Text>
                </View>
                <View className="flex justify-center items-center">
                    <Image
                        source={require('../assets/images/avatar.png')}
                        style={{ height: hp(6), width: hp(6) }}
                        className="rounded-full"
                    />
                    {/* <View style={{ height: hp(3.5), width: hp(3.5) }} className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 mt-2">
                        <Ionicons name="notifications" size={hp(2)} color="gray" />
                    </View> */}
                </View>
            </View>
            {/* Image Slider */}
            <View className="flex basis-[30%]">
                <ImageSlider />
            </View>
            {/* Body parts list */}
            <View className="flex basis-[70%]">
                <BodyParts />
            </View>
        </SafeAreaView>
    )
}

export default Home