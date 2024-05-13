import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/api";
import axios from "axios";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";
import AboutTitle from '../../components/detail/content/AboutTitle';
import NavbarTop from '../../components/header/NavbarTop';
import Picture from '../../components/detail/picure/Picture';
import HTMLRender from "react-native-render-html";

const ProductDetail = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const { ID } = route.params;

    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getProduct = async () => {
        try {
            const response = await axios.get(`${baseUrl}/products/${ID}`);
            setProduct(response.data.data);
            console.log(ID);
            console.log(product);
        } catch (error) {
            //console.log(product);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <View style={styles.productContainer}>
            <NavbarTop />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView style={styles.body}>
                    <Picture imagePath={product.image_url} commentAmount={"api chua co"} likeAmount={123} date={"d/m/y"} />
                    <AboutTitle title={product.title} tagRoute="Product" tagDetail="Shop" isPrice={true} price={product.max_current_price} />
                    <ScrollView style={styles.descriptioncontainer}>
                        <Text style={[styles.description, styles.textTypo]}>Description</Text>
                        <HTMLRender source={{ html: product.description }} contentWidth={Dimensions.get("window").width} />

                        <View style={styles.containerutilbuttons}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Payment', { Amount: 1, Price: product.max_current_price }) }} style={[styles.audiobutton, styles.savebuttonSpaceBlock]}>
                                <Text style={[styles.buyNow, styles.buyNowTypo]}>Buy now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} style={[styles.savebutton, styles.savebuttonSpaceBlock]}>
                                <Image
                                    style={styles.vectorIcon}
                                    contentFit="cover"
                                    source={require("../../assets/vector7.png")}
                                />
                                <Text style={[styles.addToCart, styles.buyNowTypo]}>Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ScrollView>
            )}
        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    productContainer: {
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
        alignSelf: "stretch",
    },
    textTypo: {
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    buyNowTypo: {
        fontSize: FontSize.labelLargeBold_size,
        textAlign: "left",
    },
    savebuttonSpaceBlock: {
        paddingVertical: Padding.p_3xs,
        paddingHorizontal: Padding.p_mini,
        borderRadius: Border.br_3xs,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "stretch",
        gap: 15
    },
    text: {
        fontSize: FontSize.bodyXlargeBold_size,
        textAlign: "left",
        color: Color.surfaceOnSurface,
    },
    description: {
        fontSize: FontSize.titleMediumBold_size,
        textAlign: "left",
        color: Color.surfaceOnSurface,
    },
    descriptioncontainer: {
        marginVertical: 15,
        alignSelf: "stretch",
    },
    buyNow: {
        color: Color.primaryOnPrimary,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    audiobutton: {
        backgroundColor: Color.primaryPrimary,
        justifyContent: "center",
        flex: 1,
    },
    vectorIcon: {
        width: 19,
        height: 19,
    },
    addToCart: {
        color: Color.primaryPrimary,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    savebutton: {
        borderStyle: "solid",
        borderColor: Color.primaryPrimary,
        borderWidth: 2,
        alignSelf: "stretch",
        flex: 1,
    },
    containerutilbuttons: {
        width: "100%",
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        gap: 15,
    },
});
