import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily, ColorDark } from "../../GlobalStyles";
import NavbarTop from "../../components/header/NavbarTop";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { useSelector, useDispatch } from "react-redux";
import { toggleMove } from "../../store";

const Payment = () => {

    const navigation = useNavigation();
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const dispatch = useDispatch();

    dispatch(toggleMove(-1));

    const route = useRoute();
    const { Amount, Price } = route.params;

    return (
        <View style={[styles.paymentContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainer } : null]}>
            <NavbarTop />
            <View style={{ padding: 10, justifyContent: "center", alignSelf: "stretch" }}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text style={[styles.headline, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Payment</Text>
                </View>
                <View style={[styles.totalContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null, isDarkMode ? { shadowColor: ColorDark.primaryShadow } : null]}>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, , isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Total</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.text1}>Number of products</Text>
                            <Text style={[styles.text1, { color: Color.surfaceOnSurface }]}>{Amount}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.text2}>Total</Text>
                            <Text style={[styles.text2, { color: Color.surfaceOnSurface }]}>${Price}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Information</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={[styles.textInContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]}>
                                <TextInput placeholder="Your Name" placeholderTextColor="#534341" style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />
                            </View>
                            <View style={[styles.textInContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null, { marginLeft: 15 }]}>
                                <TextInput placeholder="+84" placeholderTextColor="#534341" style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Address</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={[styles.textInContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]}>
                                <TextInput placeholder="Your Wards" placeholderTextColor="#534341" style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />
                            </View>
                            <View style={[styles.textInContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null, { marginLeft: 15 }]}>
                                <TextInput placeholder="+Your Province" placeholderTextColor="#534341" style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={[styles.textInContainer, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null, { marginTop: 15 }]}>
                                <Image source={require("../../assets/frame-83.png")} />
                                <TextInput placeholder="Your detail address" placeholderTextColor="#534341" style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Pay method</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                            <ButtonPrimary
                                image={require("../../assets/frame.png")}
                                buttonPrimaryBackgroundColor={isDarkMode ? ColorDark.surfaceSurfaceContainerHighest : Color.surfaceSurfaceContainerHighest}
                            />
                            <ButtonPrimary
                                image={require("../../assets/frame1.png")}
                                buttonPrimaryBackgroundColor={isDarkMode ? ColorDark.surfaceSurfaceContainerHighest : Color.surfaceSurfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                            />
                            <ButtonPrimary
                                image={require("../../assets/frame2.png")}
                                buttonPrimaryBackgroundColor={isDarkMode ? ColorDark.surfaceSurfaceContainerHighest : Color.surfaceSurfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                            <ButtonPrimary
                                text={"Cancel"}
                                buttonPrimaryBackgroundColor={Color.primaryPrimaryFixed}
                                buttonPrimaryPaddingHorizontal={15}
                                buttonPrimaryPaddingVertical={10}
                                buttonPrimaryFlex={1}
                            />
                            <ButtonPrimary
                                text={"Pay now"}
                                buttonPrimaryFlex={1}
                                buttonPrimaryMarginLeft={15}
                            />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    paymentContainer: {
        padding: 10,
        backgroundColor: Color.surfaceSurfaceContainer,
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        overflow: "hidden",
    },
    dashboardtitleFlexBox: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    totalContainer: {
        padding: 10,
        marginTop: 15,
        backgroundColor: Color.surfaceSurfaceContainerHigh,
        shadowRadius: 20,
        elevation: 20,
        padding: Padding.p_3xs,
        justifyContent: "flex-start",
        shadowOpacity: 1,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: Color.colorBlack,
        borderRadius: Border.br_3xs,
        overflow: "hidden",
    },
    headline: {
        textAlign: "left",
        fontFamily: FontFamily.labelMediumBold,
        fontSize: FontSize.headline5Bold_size,
        color: Color.surfaceOnSurface,
        fontWeight: "700",
    },
    headline1: {
        fontSize: FontSize.titleMediumBold_size,
    },
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
    textInContainer: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        borderRadius: Border.br_81xl,
        backgroundColor: Color.surfaceSurfaceContainerHighest,
        flexDirection: "row",
        padding: Padding.p_mini,
    },
    textLayout: {
        flex: 1,
        fontSize: FontSize.labelMediumBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.surfaceOnSurfaceVarient,
        textAlign: "left",
        marginLeft: 5,
    }
})

export default Payment;