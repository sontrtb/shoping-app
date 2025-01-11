import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import colors from "@/config/color";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;

function Slider() {
    const [indexFocus, setIndexFocus] = useState(0)

    const imagesSlider = [
        {
            id: 1,
            url: "https://tuart.net/wp-content/uploads/2024/02/428630028_7036924786417919_106858848498026614_n.jpg"
        },
        {
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEITNJO1ZkT1rzvhaAjt_ZQcJJ58vWfmm6Q&s"
        },
        {
            id: 3,
            url: "https://tuart.net/wp-content/uploads/2024/08/454496822_8137646862960539_1741187069971390791_n.jpg"
        },
        {
            id: 4,
            url: "https://agotourist.com/wp-content/uploads/2018/08/chup-anh-cuoi-tai-da-lat-dep4.jpg"
        },
        {
            id: 5,
            url: "https://agotourist.com/wp-content/uploads/2018/08/chup-anh-cuoi-tai-da-lat-dep4.jpg"
        },
    ]

    const goBack = () => {
        router.back()
    }

    const handleScrollX = (x: number) => {
        const index = x / windowWidth
        setIndexFocus(index)
    }

    const widthIndexSlider = ((windowWidth - 100) / imagesSlider.length) - 10

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={e => handleScrollX(e.nativeEvent.contentOffset.x)}
            >
                {
                    imagesSlider.map(slide => (
                        <Image
                            key={slide.id}
                            source={{ uri: slide.url }}
                            width={windowWidth}
                            height={windowWidth}
                        />
                    ))
                }
            </ScrollView>

            <TouchableOpacity style={styles.iconClose} onPress={goBack}>
                <AntDesign name="closecircle" size={24} color="#f4f4f4" />
            </TouchableOpacity>

            <View style={styles.indexSliderWrap}>
                {
                    imagesSlider.map((imagesSlider, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.indexSlider,
                                    indexFocus === index && styles.indexSliderSelected,
                                    {width: widthIndexSlider}
                                ]}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconClose: {
        position: "absolute",
        right: 24,
        top: 60
    },
    indexSliderWrap: {
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        left: 50
    },
    indexSlider: {
        height: 6,
        backgroundColor: colors.PRIMARY,
        marginHorizontal: 5,
        borderRadius: 4,
        opacity: 0.3
    },
    indexSliderSelected: {
        opacity: 1
    }
})

export default Slider