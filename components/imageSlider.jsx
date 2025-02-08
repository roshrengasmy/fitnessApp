import React from "react";
import { Image, View } from "react-native";
import { sliderImages } from "../constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Carousel from "react-native-reanimated-carousel";

const ImageSlider = () => {
    return (
        <Carousel
            data={sliderImages}
            loop={true}
            autoPlay={true}
            autoPlayInterval={2000}
            renderItem={renderItem}
            width={wp(100)}
            height={hp(25)}
            style={{ marginVertical: 10 }}
        />
    )
}

const renderItem = ({ item, index }) => (
    <View key={index} style={{ width: wp(95), height: hp(25), overflow: "hidden", borderRadius: 50, marginHorizontal: wp(2) }} >
        <Image source={item} style={{ resizeMode: 'cover', width: wp(100), height: hp(25) }} />
    </View>
);

export default ImageSlider