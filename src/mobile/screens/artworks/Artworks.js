import React, { useRef, useState, useEffect } from "react";
import { Text, StyleSheet, View, PanResponder, SafeAreaView, Image, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import Dashboard from "../../components/header/Dashboard";
import FrameComponent from "../../components/FrameComponent";
import AboutTitle from "../../components/detail/content/AboutTitle";
import BoardExtraInfoArtwork from "../../components/detail/picure/BoardExtraInfoArtwork";
import { useDispatch } from "react-redux";
import { toggleMove } from "../../store";
import axios from "axios";
import { baseUrl } from "../../services/api";
import { ActivityIndicator } from "react-native";

const Artworks = () => {
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
    const [artworks, setArtworks] = useState([]);
    const [page, setPage] = useState(1);


    const getArtworks = async () => {
        try {
            const response = await axios.get(`${baseUrl}/artworks?page=${page}`);
            setArtworks([...artworks, ...response.data.data]);
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
        getArtworks();
    }, [page]);

    // const renderFrameRow = () => {
    //     const frameRows = [];
    //     let currentRow = [];
    //     artworks.map((item, index) => {
    //         currentRow.push(
    //             <FrameComponent key={item.id}
    //                             onFramePressablePress={() => {
    //                                 navigation.navigate('ArtworkDetail', {ID: item.id})
    //                             }}
    //                             frameImage={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
    //                             frameAspectRatio={Math.round(item.thumbnail.width / item.thumbnail.height * 10) / 10}
    //                             height={200}
    //                             index={index}
    //                             title={item.artwork_type_title}
    //                             text={item.thumbnail.alt_text}
    //             />
    //         );
    //         if (currentRow.length === 3 || index === artworks.length - 1) {
    //             frameRows.push(
    //                 <View style={{flexDirection: "row", flex: 1}}>
    //                     {currentRow}
    //                 </View>
    //             );
    //             currentRow = [];
    //         }
    //     });
    //     return (
    //         <View>
    //             {frameRows}
    //         </View>
    //     )
    // };

    const renderItem = ({ item }) => {
        return (
            <FrameComponent key={item.id}
                onFramePressablePress={() => {
                    navigation.navigate('ArtworkDetail', { ID: item.id })
                }}
                frameImage={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                title={item.artwork_type_title}
                text={item.thumbnail?.alt_text}
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
                            data={artworks}
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

export default Artworks;
