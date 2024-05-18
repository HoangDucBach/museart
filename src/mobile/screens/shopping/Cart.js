import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native"
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { baseUrl } from "../../services/api";
import Dashboard from "../../components/header/Dashboard";
import ProductCart from "../../components/product/ProductCart";
import MyFlatList from "../../components/MyFlatList";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";

const Cart = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    //pagination
    const [page, setPage] = useState(1);
    const [numberOfProduct, setNumberOfProudct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/products?page=${page}`);
            setProducts(response.data.data);
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

    useEffect(() => {
        getProducts();
    }, [page]);

    useEffect(() => {
        const numberOfProducts = products.length;
        const total = Math.round(100 * products.reduce((sum, item) => sum + item.max_current_price, 0)) / 100;

        setNumberOfProudct(numberOfProducts);
        setTotalPrice(total);
    }, [products]);

    const renderItem = ({ item }) => {
        return (
            <ProductCart key={item.id}
                id={item.id}
                title={item.title}
                text={"Product"}
                price={item.max_current_price}
                image={item.image_url}
                // number={item.number}
                >
            </ProductCart>
        )
    }

    return (
        <View className={'flex-1'}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Dashboard namePage={"Carts"}>
                    <MyFlatList data={products} renderItem={renderItem}
                        isLoading={isLoading} handleLoading={handleLoading}
                        renderPaginationButtons={() => <View style={{paddingBottom: 150}}></View>}/>
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={[styles.totalContainer, {backgroundColor: colors.surfaceContainerHigh, shadowColor: colors.primaryShadow}]}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.text1}>Number of products</Text>
                                <Text style={[styles.text1, { color: colors.onSurface }]}>{numberOfProduct}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={styles.text2}>Total</Text>
                                <Text style={[styles.text2, { color: colors.onSurface }]}>${totalPrice}</Text>
                            </View>
                            <ButtonPrimary
                                text={"Pay now"}
                                buttonPrimaryMarginTop={30}
                                onPressButton={() => navigation.navigate("Payment", {Amount: numberOfProduct, Price: totalPrice})}
                            />
                        </View>
                    </View>
                </Dashboard>
            )
            }
        </View >
    );
};

    //     var move = 0;
    //     const moveAnim = useRef(new Animated.Value(1)).current;


    //     const panResponder = useRef(
    //       PanResponder.create({
    //         onStartShouldSetPanResponder: () => true,
    //         onMoveShouldSetPanResponder: (evt, gestureState) => {
    //           // console.log(gestureState.dy);
    //           if (gestureState.dy > 5) move = 1;
    //           else if (gestureState.dy < -5) move = -1;
    //           return false;
    //         }
    //       })
    //     ).current;

    //       if (move == 1) {
    //     Animated.timing(moveAnim, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }).start();
    //   }
    //   else if (move == -1) {
    //     Animated.timing(moveAnim, {
    //       toValue: 100,
    //       duration: 1000,
    //       useNativeDriver: true,
    //     }).start();
    //   }


    // return (
    //     <View style={{ flex: 1 }}>
    //         <Dashboard namePage="Cart">
    //             <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
    //             <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
    //             <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>

    //             <View style={{ height: 100 }} />
    //         </Dashboard>
    //         <View style={{ marginHorizontal: 15 }}>
    //             <View style={[styles.totalContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null, isDarkMode ? { shadowColor: ColorDark.primaryShadow } : null]}>
    //                 <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    //                     <Text style={styles.text1}>Number of products</Text>
    //                     <Text style={[styles.text1, { color: Color.surfaceOnSurface }]}>{numberOfProduct}</Text>
    //                 </View>
    //                 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
    //                     <Text style={styles.text2}>Total</Text>
    //                     <Text style={[styles.text2, { color: Color.surfaceOnSurface }]}>${totalAmount}</Text>
    //                 </View>
    //                 <ButtonPrimary
    //                     text={"Pay now"}
    //                     buttonPrimaryMarginTop={30}
    //                     onPressButton={() => navigation.navigate("Payment", {Amount: numberOfProduct, Price: totalAmount})}
    //                 />
    //             </View>
    //         </View>
    //     </View>
    // );
// };

const styles = StyleSheet.create({
    text1: {
        fontFamily: FontFamily.typographyLabelLarge,
        fontSize: FontSize.labelLargeBold_size,
        color: Color.primaryPrimaryFixed
    },
    text2: {
        fontFamily: FontFamily.labelMediumBold,
        fontSize: FontSize.labelLargeBold_size,
        color: Color.primaryPrimaryFixed
    },
    totalContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignSelf: "center",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 20,
        elevation: 5,
        shadowOpacity: 0.5,
        borderRadius: Border.br_3xs,
        padding: Padding.p_3xs,
    },
});

export default Cart;