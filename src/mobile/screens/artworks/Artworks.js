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
import MyFlatList from "../../components/MyFlatList";

const Artworks = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);
    const [artworks, setArtworks] = useState([]);
    //pagination
    const [page, setPage] = useState(1);
    const [totalPages, setTotalpages] = useState(0);

    const getArtworks = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${baseUrl}/artworks?page=${page}`);
            setArtworks([...artworks, ...response.data.data]);
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
        getArtworks();
    }, [page]);

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
        <View className={'flex-1'}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Dashboard"}>
                    <MyFlatList
                        data={artworks}
                        renderItem={renderItem}
                        isLoading={isLoading}
                        handleLoading={handleLoading}
                        totalPages={totalPages}
                        page={page} />
                </Dashboard>
            )
            }
        </View >
    );
};

export default Artworks;
