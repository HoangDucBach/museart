import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, PanResponder } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import SettingsMenu from "../../components/header/SettingsMenu";
import Dashboard from "../../components/header/Dashboard";
import FrameComponent from "../../components/FrameComponent";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { baseUrl } from "../../services/api";
import { useDispatch } from "react-redux";
import { toggleMove } from "../../store";

const Exhibitions = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // console.log(gestureState.dy);
        if (gestureState.dy > 5) dispatch(toggleMove(1));
        else if (gestureState.dy < -5) dispatch(toggleMove(-1));
      }
    })
  ).current;

  const [isLoading, setLoading] = useState(true);
  const [exhibitions, setExhibitions] = useState([]);
  const [page, setPage] = useState(1);

  const getExhibitions = async () => {
    try {
      const response = await axios.get(`${baseUrl}/exhibitions?page=${page}`);
      setExhibitions(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const loadMore = () => {
    setPage(page + 1);
  }
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
    <View style={{}} className={'w-screen box-border'} {...panResponder.panHandlers}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Dashboard namePage={"Dashboard"}>
          <SafeAreaView
            horizonta={false}
            className={'w-full text-center flex'}
          >
            <FlatList
              key={'_'}
              numColumns={1}
              data={exhibitions}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={loadMore}
              onEndReachedThreshold={5}
              className={'w-full text-center box-border p-4'}
              // contentContainerStyle={{
              //     display: 'grid',
              //     gridTemplateColumns: 'repeat(auto-fill, var(--card_width))',
              //     gridAutoRows: 'var(--row_increment)',
              //     justifyContent: 'center'
              // }}
              contentContainerStyle={{
                display: 'flex',
                gap: 16,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
              scrollEnabled={false}
            />
          </SafeAreaView>
        </Dashboard>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Exhibitions;
