import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "../../components/header/Dashboard";
import FrameComponent from "../../components/FrameComponent";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { baseUrl } from "../../services/api";
import MyFlatList from "../../components/MyFlatList";

const Exhibitions = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const [exhibitions, setExhibitions] = useState([]);
  //pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);

  const getExhibitions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/exhibitions?page=${page}`);
      setExhibitions(response.data.data);
      setTotalpages(response.data.pagination.total_pages);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const loadMore = (p) => setPage(p);

  const renderPaginationButtons = () => {
    const maxButtonsToShow = 5;
    let startPage = Math.max(1, page - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }

    const buttons = [];

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          onPress={() => loadMore(i)}
          style={[
            styles.paginationButton,
            i === page ? styles.activeButton : null,
          ]}>
          <Text style={{ color: 'white' }}>{i}</Text>
        </TouchableOpacity>,
      );
    }

    return buttons;
  };

  const renderItem = ({ item }) => {
    return (
      <FrameComponent key={item.id}
        onFramePressablePress={() => {
          navigation.navigate('ExhibitionDetail', { ID: item.id })
        }}
        frameImage={item.image_url}
        title={item.title}
      />
    )
  }

  useEffect(() => {
    getExhibitions();
  }, [page]);

  return (
    <View className={'flex-1'}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Dashboard namePage={"Exhibitions"}>
          <MyFlatList data={exhibitions} renderItem={renderItem}
            isLoading={isLoading} handleLoading={handleLoading}
            renderPaginationButtons={renderPaginationButtons} />
        </Dashboard>
      )}
    </View>
  );
};

export default Exhibitions;

const styles = StyleSheet.create({
  paginationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: 'gray',
  },
  activeButton: {
    backgroundColor: '#22c55d',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
