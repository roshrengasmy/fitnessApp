import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";



const BodyParts = () => {

    const router = useRouter()

    const BodyPartCard = ({ item, index }) => {
        return (
            <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()} key={index}>
                <TouchableOpacity onPress={() => { router.push('exercises'), router.setParams({ data: JSON.stringify(item) }) }} style={{ width: wp(44), height: wp(52) }}
                    className="flex justify-end p-4 mb-4" >
                    <Image
                        source={item?.image}
                        resizeMode="cover"
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[35px] absolute"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.9)']}
                        style={{ width: wp(44), height: wp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                    <Text
                        style={{ fontSize: hp(2.3) }}
                        className="text-white font-semibold text-center tracking-wide"
                    >
                        {item?.name}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View className="mx-4">
            <Text className="font-semibold text-neutral-700" style={{ fontSize: hp(3) }}>Exercises</Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 150, paddingTop: 10, }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <BodyPartCard index={index} item={item} />}
            />
        </View>
    )
}



export default BodyParts