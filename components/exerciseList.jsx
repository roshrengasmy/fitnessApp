import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const ExerciseList = ({ data }) => {
    const router = useRouter()

    const ExerciseCard = ({ item, index }) => {
        return (
            <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()} key={index}>
                <TouchableOpacity
                    onPress={() => { router.push('exerciseDetails'), router?.setParams({ data: JSON.stringify(item) }) }}
                    className="flex mb-10"
                    style={{ width: wp(44), height: wp(58) }}
                >
                    <View className="bg-neutral-200" style={{ width: wp(44.5), height: wp(52), right: 2, borderRadius: 25 }} >
                        <Image
                            source={{ uri: item?.gifUrl }}
                            contentFit="cover"
                            style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
                        />
                    </View>
                    <Text style={{ fontSize: hp(1.7) }} className="text-neutral-700 font-semibold mt-2 tracking-wide" >
                        {item?.name?.lenght > 20 ? item.name.slice(0, 20) + '...' : item?.name}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View className="flex-1" >
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20, }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={ExerciseCard}
            />
        </View>
    )
}

export default ExerciseList