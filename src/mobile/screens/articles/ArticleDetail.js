import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import AboutTitle from '../../components/detail/content/AboutTitle';
import BoardExtraInfoArtwork from '../../components/detail/picure/BoardExtraInfoArtwork';
import NavbarTop from '../../components/header/NavbarTop';
import { useRoute, useTheme } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";


const ArticleDetail = () => {
    const route = useRoute();
    const { ID } = route.params;

    const [article, setArticle] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { colors } = useTheme();

    const getArticle = async () => {
        try {
            const response = await axios.get(`${baseUrl}/articles/${ID}`);
            setArticle(response.data.data);
            // console.log(ID);
            // console.log(article);
        } catch (error) {
            //console.log(article);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <View className={`w-screen flex-1`} style={[{ backgroundColor: colors.surfaceContainer }]}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <AboutTitle title={article.title} tagRoute="Article" tagDetail="Document" isPrice={false} />
                    <View style={{ height: 15 }} />
<<<<<<< HEAD
                    <BoardExtraInfoArtwork commentAmount={"api chưa có"} likeAmount={123} date={"d/m/y"} />
                    <Text style={[styles.thereAreMany, styles.thereAreManySpaceBlock, {color: colors.onSurface}]}>{article.copy}</Text>
                    <View style={{paddingBottom: 100}} />
=======
                    <BoardExtraInfoArtwork commentAmount={""} likeAmount={''} date={article.timestamp} />
                    <Text style={[styles.thereAreMany, styles.thereAreManySpaceBlock, { color: colors.onSurface }]}>{article.copy}</Text>

>>>>>>> 65a12dff9741e812c6ed9f3cfb6a70aff496fb18
                </ScrollView>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    articleContainer: {
        paddingHorizontal: Padding.p_3xs,
        borderStyle: "solid",
        borderColor: Color.colorBlack,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    body: {
        padding: Padding.p_3xs,
        flexDirection: "column",
        gap: 15,
        alignSelf: "stretch"
    },
    thereAreManySpaceBlock: {
        marginTop: 15,
        marginHorizontal: 5,
        alignSelf: "stretch",
    },
    thereAreMany: {
        fontSize: FontSize.labelLargeBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.surfaceOnSurface,
        textAlign: "justify",
    },
});

export default ArticleDetail;