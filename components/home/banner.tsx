import colors from "@/config/color";
import layout from "@/config/layout";
import { View, StyleSheet, Text } from "react-native";

function Banner() {
    return (
        <View style={styles.root}>
            <Text style={styles.textBanner}>
                Need help?
            </Text>
            <Text style={styles.textBanner2}>
                Make an appointment or chat with us.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: layout.PADDING_HORIZONTAL_PAGE,
        backgroundColor: colors.PRIMARY,
        marginTop: 28,
        padding: 16,
        borderRadius: 8
    },
    textBanner: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 10
    },
    textBanner2: {
        color: "#fff"
    }
});

export default Banner