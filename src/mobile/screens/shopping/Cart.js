import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native";
import Dashboard from "../../components/header/Dashboard";
import ProductCart from "../../components/product/ProductCart";
import ProductShopping from "../../components/product/ProductShopping";
import { Color, ColorDark, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { PanResponder } from "react-native";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { toggleMove } from "../../store";

const Cart = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    dispatch(toggleMove(0));
    const isDarkMode = useSelector(state => state.theme.isDarkMode);

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

    const numberOfProduct = 120;
    const totalAmount = 200;

    return (
        <View style={{ flex: 1 }}>
            <Dashboard namePage="Cart">
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>
                <ProductCart title={"Product"} text={"text"} price={"12.20"} image={'https://fastly.picsum.photos/id/20/200/200.jpg?hmac=wHmtG3BEC6aOsGZU_Q2wnxVQq34B__t4x4LFw-sptM8'} number={2}></ProductCart>

                <View style={{ height: 100 }} />
            </Dashboard>
            <View style={{ marginHorizontal: 15 }}>
                <View style={[styles.totalContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null, isDarkMode ? { shadowColor: ColorDark.primaryShadow } : null]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.text1}>Number of products</Text>
                        <Text style={[styles.text1, { color: Color.surfaceOnSurface }]}>{numberOfProduct}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                        <Text style={styles.text2}>Total</Text>
                        <Text style={[styles.text2, { color: Color.surfaceOnSurface }]}>${totalAmount}</Text>
                    </View>
                    <ButtonPrimary
                        text={"Pay now"}
                        buttonPrimaryMarginTop={30}
                        onPressButton={() => navigation.navigate("Payment", {Amount: numberOfProduct, Price: totalAmount})}
                    />
                </View>
            </View>
        </View>
    );
};

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
        bottom: 10,
        width: "100%",
        alignSelf: "center",
        shadowColor: "d9cfbe",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 20,
        elevation: 5,
        shadowOpacity: 1,
        backgroundColor: Color.surfaceSurfaceContainerHigh,
        borderRadius: Border.br_3xs,
        margin: 5,
        padding: Padding.p_3xs,
    },
});

export default Cart;