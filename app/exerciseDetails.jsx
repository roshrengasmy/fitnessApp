import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseDetails = () => {
    const { data } = useLocalSearchParams();
    const item = JSON.parse(data)
    const router = useRouter();
    return (
        <View className="flex flex-1 bg-white">
            <View className="pt-10" >
                <Image
                    source={{ uri: item?.gifUrl }}
                    contentFit="contain"
                    style={{ width: wp(100), height: wp(80) }}
                />
            </View>
            <TouchableOpacity
                onPress={() => { router.back() }}
                className="mx-2 absolute rounded-full  right-0"
                style={{ height: hp(4), width: hp(4), marginTop: hp(6) }}
            >
                <AntDesign name="closecircle" size={hp(2.5)} color={"#f43f5e"} />
            </TouchableOpacity>
            {/* Exercise Description */}
            <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                <Animated.Text entering={FadeInDown.delay(100).springify()}
                    style={{ fontSize: hp(3.5) }}
                    className="font-semibold text-neutral-800 tracking-wide"
                >{item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}</Animated.Text>
                <Animated.Text entering={FadeInDown.delay(200).springify()} style={{ fontSize: hp(2) }} className="text-neutral-700 tracking-wide">
                    Equipment <Animated.Text className="text-neutral-800 font-bold">{item?.equipment.charAt(0).toUpperCase() + item?.equipment.slice(1)}</Animated.Text>
                </Animated.Text>
                <View className="flex-row">
                    <Animated.Text entering={FadeInDown.delay(300).springify()} style={{ fontSize: hp(2) }} className="text-neutral-700 tracking-wide">
                        Secondary Muscles
                    </Animated.Text>
                    {
                        item?.secondaryMuscles?.map((secMuscle, index) => (
                            <View key={index}>
                                <Animated.Text entering={FadeInDown.delay(300).springify()} key={index} style={{ fontSize: hp(2) }} className="text-neutral-800 font-bold">{' ' + secMuscle.charAt(0).toUpperCase() + secMuscle.slice(1)}<Animated.Text>{index == item?.secondaryMuscles?.length - 1 ? '' : ','}</Animated.Text></Animated.Text>
                            </View>
                        ))
                    }
                </View>
                <Animated.Text entering={FadeInDown.delay(400).springify()} style={{ fontSize: hp(2) }} className="text-neutral-700 tracking-wide">
                    Target <Text className="text-neutral-800 font-bold">{item?.target.charAt(0).toUpperCase() + item?.equipment.slice(1)}</Text>
                </Animated.Text>
                <Animated.Text entering={FadeInDown.delay(500).springify()} style={{ fontSize: hp(3) }} className="font-semibold text-neutral-800 tracking-wide mt-4">
                    Instructions
                </Animated.Text>
                {
                    item?.instructions.map((instruction, index) => {
                        return (
                            <Animated.Text entering={FadeInDown.delay(index + 600).springify()}
                                key={index}
                                style={{ fontSize: hp(1.9) }}
                                className="text-neutral-800"
                            >
                                {index + 1}{'.'} {instruction}
                            </Animated.Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ExerciseDetails;