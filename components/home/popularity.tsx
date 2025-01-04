import colors from "@/config/color"
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

interface IPopularityProps {
    category: number
}

function Popularity(props: IPopularityProps) {
    const {category} = props

    const listWedding = [
        {
            id: 1,
            name: "Wedding",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnEvYvWi2jBgdEtcU58c10E9HWSMl_KRF6g&s",
            price: 90,
            star: 5
        },
        {
            id: 2,
            name: "Wedding",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 3
        },
        {
            id: 3,
            name: "Wedding",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 4,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 5,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 5
        }
    ]

    const listDecor = [
        {
            id: 1,
            name: "Decor",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 5
        },
        {
            id: 2,
            name: "Decor",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 3
        },
        {
            id: 3,
            name: "Decor",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 4,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 5,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 5
        }
    ]

    const listGift = [
        {
            id: 1,
            name: "Gift",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 5
        },
        {
            id: 2,
            name: "Gift",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 3
        },
        {
            id: 3,
            name: "Gift",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 4,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 4
        },
        {
            id: 5,
            name: "Spark",
            image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg",
            price: 90,
            star: 5
        }
    ]

    const renderList = () => {
        if(category === 1) return listWedding
        if(category === 2) return listDecor
        if(category === 3) return listGift
    }

    return (
        <View>
            <Text style={styles.title}>Popularity</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    renderList()?.map(product => (
                        <TouchableOpacity key={product.id} style={styles.card} activeOpacity={0.6}>
                            <Image
                                source={{ uri: product.image }}
                                style={styles.image}
                            />
                            <View style={styles.contentCard}>
                                <View>
                                    <Text style={styles.prdName}>{product.name}</Text>
                                    <Text style={styles.prdPrice}>${product.price}</Text>
                                </View>

                                <View style={styles.starWrap}>
                                    {
                                        new Array(product.star).fill(1).map(() => (
                                            <AntDesign name="star" size={14} color="#F5DF55" />
                                        ))
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    contentCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    title: {
        // paddingHorizontal: layout.PADDING_HORIZONTAL_PAGE
        fontSize: 20,
        marginTop: 24,
        fontWeight: "500",
        marginBottom: 16
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 8
    },
    card: {
        backgroundColor: colors.BG_CARD,
        padding: 12,
        marginRight: 16,
        borderRadius: 8
    },
    prdName: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.PRIMARY
    },
    prdPrice: {
        fontWeight: "500",
        marginTop: 2
    },
    starWrap: {
        flexDirection: "row"
    }
})

export default Popularity