import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";
import AboutTitle from '../../components/detail/content/AboutTitle';
import BoardExtraInfoArtwork from '../../components/detail/picure/BoardExtraInfoArtwork';
import NavbarTop from '../../components/header/NavbarTop';
import AboutArtist from '../../components/detail/content/AboutArtist';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";


const ArticleDetail = () => {
    const route = useRoute();
    const { ID } = route.params;

    const [article, setArticle] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getArticle = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/articles/${ID}`);
            setArticle(response.data[0].detail);
            console.log(ID);
            console.log(article);
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
        <View style={styles.articleContainer}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View style={styles.body}>
                    <AboutTitle title={article.title} tagRoute="Article" tagDetail="Document" isPrice={false} />
                    <BoardExtraInfoArtwork commentAmount={"api chưa có"} likeAmount={123} date={"d/m/y"} />
                    <ScrollView>
                        <Text style={[styles.thereAreMany, styles.thereAreManySpaceBlock]}>{article.copy}</Text>
                    </ScrollView>
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    articleContainer: {
        backgroundColor: Color.surfaceSurfaceContainer,
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: "column",
        alignSelf: "stretch"
    },
    body: {
        padding: Padding.p_3xs,
        flexDirection: "column",
        gap: 15,
        alignSelf: "stretch"
    },
    thereAreManySpaceBlock: {
        marginTop: 15,
        alignSelf: "stretch",
    },
    thereAreMany: {
        fontSize: FontSize.labelLargeBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.surfaceOnSurface,
        textAlign: "left",
    },
});

export default ArticleDetail;