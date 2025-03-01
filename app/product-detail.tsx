import Slider from "@/components/product-detail/Slider"
import layout from "@/config/layout"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from "@/config/color";
import { useState } from "react";

function ProductDetail() {
    const pri = 90
    const [quantity, setQuantity] = useState(1)

    return (
        <View>
            <Slider />

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.textTitle}>Spark</Text>
                    <Text style={styles.textPrice}>${pri}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Availability</Text>
                    <Text style={{ color: "green" }}>In Stock</Text>
                </View>
                <View style={styles.row}>
                    <Text>Rating</Text>
                    <View style={styles.row}>
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.row}>
                    <Text>Quantity</Text>
                    <View>
                        <TouchableOpacity onPress={() => {
                            if(quantity === 1) return;
                            
                            setQuantity(quantity - 1)
                        }}>
                            <Text>-</Text>
                        </TouchableOpacity>

                        <Text>{quantity}</Text>

                        <TouchableOpacity onPress={() => {
                            setQuantity(quantity + 1)
                        }}>
                            <Text>+</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitle}>Total</Text>
                    <Text style={styles.textPrice}>${pri}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },
    content: {
        padding: layout.PADDING_HORIZONTAL_PAGE
    },
    line: {
        marginVertical: 20,
        backgroundColor: "#ccc",
        height: 1,
        width: "100%"
    },
    textTitle: {
        fontSize: 22,
        fontWeight: "500"
    },
    textPrice: {
        fontSize: 22,
        color: colors.PRIMARY,
        fontWeight: "600"
    }
})

export default ProductDetail