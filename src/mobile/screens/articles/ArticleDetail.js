import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";
import AboutTitle from '../../components/detail/content/AboutTitle';
import BoardExtraInfoArtwork from '../../components/detail/picure/BoardExtraInfoArtwork';
import NavbarTop from '../../components/header/NavbarTop';
import AboutArtist from '../../components/detail/content/AboutArtist';
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
        <View style={[styles.articleContainer, {backgroundColor: colors.surfaceContainer}]}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <AboutTitle title={article.title} tagRoute="Article" tagDetail="Document" isPrice={false} />
                    <View style={{ height: 15 }} />
                    <BoardExtraInfoArtwork commentAmount={"api chưa có"} likeAmount={123} date={"d/m/y"} />
                    <Text style={[styles.thereAreMany, styles.thereAreManySpaceBlock, {color: colors.onSurface}]}>{article.copy}</Text>

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
        // padding: Padding.p_3xs,
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