import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, PanResponder, TouchableOpacity, RefreshControl } from "react-native";
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

  useEffect(() => {
    getExhibitions();
  }, [page]);

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

  return (
    <View className={'flex-1'}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Dashboard namePage={"Dashboard"}>
          <MyFlatList
            data={exhibitions}
            renderItem={renderItem}
            isLoading={isLoading}
            handleLoading={handleLoading}
            totalPages={totalPages}
            page={page} />
        </Dashboard>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
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

export default Exhibitions;
