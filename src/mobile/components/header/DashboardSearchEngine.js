import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, TextInput, Pressable, FlatList, Text, Touchable, TouchableOpacity, Dimensions } from "react-native";
import { FontSize, FontFamily, Border } from "../../GlobalStyles";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../services/api";

const DashboardSearchEngine = () => {

  const onFrame41Press = () => { console.log("press frame-41") }
  const onFrame40Press = () => { console.log("press frame-40") }
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);
  const route = useRoute();
  const navigation = useNavigation();
  const [filter, setFilter] = useState(null);

  let model;
  switch (route.name) {
    case "ArtworkScreen": model = "artworks"; break;
    case "ExhibitionScreen": model = "exhibitions"; break;
    case "ArticleScreen": model = "articles"; break;
    case "ShoppingScreen": model = "products"; break;
  }

  const searchData = async (q) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/${model}/search?q="${q}"&page=${page}`);
      setData(response.data.data);
      console.log(data);
      setTotalpages(response.data.pagination.total_pages);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = () => { if (page < totalPages) setPage(page + 1) };

  const handleEmpty = () => {
    return <Text> No Institution!</Text>;
  };

  const handlePress = (id) => {
    let detail;
    switch (route.name) {
      case "ArtworkScreen": detail = navigation.navigate('ArtworkDetail', { ID: id }); break;
      case "ExhibitionScreen": detail = navigation.navigate('ExhibitionDetail', { ID: id }); break;
      case "ArticleScreen": detail = navigation.navigate('ArticleDetail', { ID: id }); break;
      case "ShoppingScreen": detail = navigation.navigate('ProductDetail', { ID: id }); break;
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { handlePress(item.id) }}>
        <Text numberOfLines={1} style={{ color: colors.onSurface }}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  React.useEffect(() => { searchData(filter); console.log(page) }, [page])
  return (
    <View style={{
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <View style={[styles.dashboardsearchengine, { backgroundColor: colors.surfaceContainerHighest }]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../assets/vector1.png")}
        />
        <TextInput placeholder="Search picture, product, . . ."
          placeholderTextColor={colors.onSurfaceVarient}
          style={[styles.searchPictureProduct, { color: colors.onSurface }]}
          onChangeText={(text) => {
            setFilter(text);
            if (text != '') searchData(text);
            else setPage(1);
          }}
        />
        <Pressable onPress={onFrame41Press}>
          <Image
            style={styles.dashboardsearchengineChild}
            contentFit="cover"
            source={require("../../assets/frame-41.png")}
          />
        </Pressable>
        <Pressable onPress={onFrame40Press}>
          <Image
            style={styles.dashboardsearchengineChild}
            contentFit="cover"
            source={require("../../assets/frame-40.png")}
          />
        </Pressable>
      </View>
      {
        data.length && filter != '' ?
          <FlatList data={data} renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={<TouchableOpacity onPress={() => { loadMore() }}><Text style={{ color: colors.onSurfaceVarient }}>Load more {">"}</Text></TouchableOpacity>}
            ListEmptyComponent={handleEmpty}
            style={{
              position: "absolute", top: 60, backgroundColor: colors.surfaceContainerHighest,
              zIndex: 10, // works on ios
              elevation: 10,// works on android 
              borderRadius: 15,
              alignSelf: "center",
              padding: 10,
              width: Dimensions.get("screen").width - 20
            }} />
          : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 20,
    height: 20,
  },
  searchPictureProduct: {
    flex: 1,
    fontSize: FontSize.labelMediumBold_size,
    fontFamily: FontFamily.typographyLabelLarge,
    textAlign: "left",
    marginLeft: 10,
  },
  dashboardsearchengineChild: {
    width: 25,
    height: 25,
  },
  dashboardsearchengine: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
});

export default DashboardSearchEngine;
