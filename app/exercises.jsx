import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { fetchExercisesByBodyPart } from "../services/exerciseDB";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/exerciseList";
import { ScrollView } from "react-native-virtualized-view";
import { LinearGradient } from "expo-linear-gradient";

const Exercises = () => {

    const router = useRouter();
    const { data } = useLocalSearchParams()
    const item = data ? JSON.parse(data) : null;
    const [exercise, setExercise] = useState([])

    useEffect(() => {
        if (item)
            getExercise(item?.name)
    }, [])

    const getExercise = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        setExercise(data)
    }

    return (
        <View>
            <StatusBar style="light" />
            <View /* onPress={() => { router.push('exercises'), router.setParams({ data: JSON.stringify(item) }) }} */ style={{ width: wp(100), height: wp(60) }}
                className="flex justify-end" >
                <Image
                    source={item?.image}
                    style={{ width: wp(100), height: hp(30) }}
                    resizeMode="cover"
                    className="absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(100), height: wp(25) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
                <Text
                    style={{ fontSize: hp(4) }}
                    className="text-white font-semibold text-left tracking-wide px-5 py-6 "
                >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)} Exercise
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center rounded-full"
                style={{ height: hp(4), width: hp(4), marginTop: hp(5) }}
            >
                <Ionicons name="caret-back-outline" size={hp(2.5)} color="white" />
            </TouchableOpacity>
            {/* Exercises */}
            <View className="px-4 space-y-3  rounded-t-[20px] mb-20">
                <ExerciseList data={exercise} />
            </View>
        </View>
    )
}

export default Exercises