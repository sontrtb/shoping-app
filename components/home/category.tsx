import colors from '@/config/color';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ICategory {
    onChange: (id: number) => void
}

export default function Category(props: ICategory) {
    const {onChange} = props
    
    const [categoryFocus, setCategoryFocus] = useState(1)

    const onChangeCategory = (id: number) => {
        setCategoryFocus(id)
        onChange(id)
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={[styles.category, categoryFocus === 1 && styles.categoryFocus]}
                onPress={() => onChangeCategory(1)}
            >
                <Text style={[styles.textCategory, categoryFocus === 1 && styles.textCategoryFocus]}>Wedding</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeCategory(2)}
                style={[styles.category, categoryFocus === 2 && styles.categoryFocus]}
            >
                <Text style={[styles.textCategory, categoryFocus === 2 && styles.textCategoryFocus]}>Decor</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeCategory(3)}
                style={[styles.category, categoryFocus === 3 && styles.categoryFocus]}
            >
                <Text style={[styles.textCategory, categoryFocus === 3 && styles.textCategoryFocus]}>Gift</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        backgroundColor: "#dddddd",
        padding: 3,
        borderRadius: 9
    },
    category: {
        backgroundColor: "#dddddd",
        flex: 1,
        alignItems: "center",
        padding: 10,
        borderRadius: 7
    },
    categoryFocus: {
        backgroundColor: colors.PRIMARY
    },
    textCategory: {
        fontSize: 12,
        fontWeight: "500"
    },
    textCategoryFocus: {
        color: "#fff"
    }
});