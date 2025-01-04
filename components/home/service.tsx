import { View, Text, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from "@/config/color";

function Service() {
    const list = [
        {
            image: "",
            name: ""
        },
        {
            image: "",
            name: ""
        },
        {
            image: "",
            name: ""
        },
        {
            image: "",
            name: ""
        }
    ]
    return (
        <View style={styles.root}>
            <View style={styles.item}>
                <AntDesign name="windows" size={32} color="#fff" style={styles.allIcon}/>
                <Text style={styles.text}>All</Text>
            </View>
            {
                list.map(item => (
                    <View style={styles.item}>
                        <AntDesign name="windows" size={32} color="#fff" style={styles.allIcon}/>
                        <Text style={styles.text}>All</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        alignItems: "center"
    },
    text: {
        fontSize: 12,
        marginTop: 4
    },
    allIcon: {
        padding: 8,
        backgroundColor: colors.PRIMARY,
        borderRadius: 5
    }
});


export default Service