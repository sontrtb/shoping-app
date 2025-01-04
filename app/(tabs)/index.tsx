import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import layout from "@/config/layout"
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from '@/components/home/category';
import Banner from '@/components/home/banner';
import Popularity from '@/components/home/popularity';
import Service from '@/components/home/service';
import { useState } from 'react';

export default function HomeScreen() {
  const [category, setCategory] = useState(1)

  const onChangeCategory = (id: number) => {
    setCategory(id)
  }

  return (
    <SafeAreaView >
      <View style={styles.root}>
        <Text style={styles.textTitle}>FLORIST</Text>

        <View style={styles.header}>
          <Text style={styles.textWelcome}>Welcome!</Text>
          <AntDesign name="user" size={24} color="black" />
        </View>

        <Category onChange={onChangeCategory}/>
        <Banner />
        <Service />
        <Popularity category={category}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: layout.PADDING_HORIZONTAL_PAGE
  },
  textTitle: {
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30
  },
  textWelcome: {
    fontWeight: "500",
    fontSize: 24
  }
});
