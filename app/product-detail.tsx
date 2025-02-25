import Slider from "@/components/product-detail/Slider"
import layout from "@/config/layout"
import { View, Text, StyleSheet } from "react-native"


function ProductDetail() {
    const pri = 90

    return (
        <View>
            <Slider />

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text>Spark</Text>
                    <Text>${pri}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Availability</Text>
                    <Text>In Stock</Text>
                </View>
                <View style={styles.row}>
                    <Text>Rating</Text>
                    <Text>${pri * 9}</Text>
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
    }
})

export default ProductDetail