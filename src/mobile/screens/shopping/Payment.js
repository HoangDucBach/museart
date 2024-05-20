import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Modal, Pressable } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import NavbarTop from "../../components/header/NavbarTop";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import NotificationSuccess from "../../components/notification/NotificationSuccess";
import NotificationFailed from "../../components/notification/NotificationFailed";

const Payment = () => {

    const navigation = useNavigation();

    const { colors } = useTheme();
    const route = useRoute();
    
    const { Amount, Price } = route.params;
    const [name, setName] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [ward, setWard] = useState("");
    const [province, setProvince] = useState("");
    const [address, setAddress] = useState("");
    const [payMethod, setPayMethod] = useState(0);
    const [success, setSuccess] = useState(0);
    const checkValid = () => {
        return name != "" && numberPhone != "" && ward != "" && province != "" && address != "" && payMethod != 0;
    }
    return (
        <View style={[styles.paymentContainer, {backgroundColor: colors.surfaceContainer}]}>
            <NavbarTop />
            <View style={{ padding: 10, justifyContent: "center", alignSelf: "stretch" }}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text style={[styles.headline, {color: colors.onSurface}]}>Payment</Text>
                </View>
                <View style={[styles.totalContainer, {backgroundColor: colors.surfaceContainerHigh, shadowColor: colors.primaryShadow}]}>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, , {color: colors.onSurface}]}>Total</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.text1}>Number of products</Text>
                            <Text style={[styles.text1, {color: colors.onSurface}]}>{Amount}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.text2}>Total</Text>
                            <Text style={[styles.text2, {color: colors.onSurface}]}>${Price}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, {color: colors.onSurface}]}>Information</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={[styles.textInContainer, {backgroundColor: colors.surfaceContainerHighest}]}>
                                <TextInput
                                    placeholder="Your Name"
                                    placeholderTextColor={colors.onSurfaceVarient}
                                    style={[styles.textLayout, {color: colors.onSurface}]}
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>
                            <View style={[styles.textInContainer, {backgroundColor: colors.surfaceContainerHighest}, { marginLeft: 15 }]}>
                                <TextInput
                                    placeholder="Your Number"
                                    placeholderTextColor={colors.onSurfaceVarient}
                                    style={[styles.textLayout, {color: colors.onSurface}]}
                                    value={numberPhone}
                                    onChangeText={(text) => setNumberPhone(text)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, {color: colors.onSurface}]}>Address</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={[styles.textInContainer, {backgroundColor: colors.surfaceContainerHighest}]}>
                                <TextInput
                                    placeholder="Your Wands"
                                    placeholderTextColor={colors.onSurfaceVarient}
                                    style={[styles.textLayout, {color: colors.onSurface}]}
                                    value={ward}
                                    onChangeText={(text) => setWard(text)}
                                />
                            </View>
                            <View style={[styles.textInContainer, {backgroundColor: colors.surfaceContainerHighest}, { marginLeft: 15 }]}>
                                <TextInput
                                    placeholder="Your Province"
                                    placeholderTextColor={colors.onSurfaceVarient}
                                    style={[styles.textLayout, {color: colors.onSurface}]}
                                    value={province}
                                    onChangeText={(text) => setProvince(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={[styles.textInContainer, {backgroundColor: colors.surfaceContainerHighest}, { marginTop: 15 }]}>
                                <Image source={require("../../assets/frame-83.png")} />
                                <TextInput
                                    placeholder="Your detail address"
                                    placeholderTextColor={colors.onSurfaceVarient}
                                    style={[styles.textLayout, {color: colors.onSurface}]}
                                    value={address}
                                    onChangeText={(text) => setAddress(text)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[styles.headline, styles.headline1, {color: colors.onSurface}]}>Pay method</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                            <ButtonPrimary
                                image={require("../../assets/frame.png")}
                                buttonPrimaryBackgroundColor={colors.surfaceContainerHighest}
                                buttonPrimaryBorderWidth={payMethod === 1 ? 2 : 0}
                                onPressButton={() => setPayMethod(1)}
                            />
                            <ButtonPrimary
                                image={require("../../assets/frame1.png")}
                                buttonPrimaryBackgroundColor={ colors.surfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                                buttonPrimaryBorderWidth={payMethod === 2 ? 2 : 0}
                                onPressButton={() => setPayMethod(2)}
                            />
                            <ButtonPrimary
                                image={require("../../assets/frame2.png")}
                                buttonPrimaryBackgroundColor={ colors.surfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                                buttonPrimaryBorderWidth={payMethod === 3 ? 2 : 0}
                                onPressButton={() => setPayMethod(3)}
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
                                onPressButton={() => navigation.goBack()}
                            />
                            <ButtonPrimary
                                text={"Pay now"}
                                buttonPrimaryFlex={1}
                                buttonPrimaryMarginLeft={15}
                                onPressButton={() => {
                                    checkValid() ? setSuccess(1) : setSuccess(-1);
                                }}
                            />
                        </View>
                    </View>
                </View>
                <Modal visible={success != 0} animationType="fade" transparent={true} style={{flex: 1, justifyContent: "center", alignSelf: "center"}}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000BF"}}>
                        <Pressable style={{flex: 1, justifyContent: "center", alignItems: "center"}} onPress={() => setSuccess(0)}>
                            { success === 1 ? <NotificationSuccess /> : <NotificationFailed /> }
                        </Pressable>
                    </View>
                </Modal>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    paymentContainer: {
        padding: 10,
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
        marginTop: 15,
        padding: Padding.p_3xs,
        justifyContent: "flex-start",
        elevation: 10,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        borderRadius: Border.br_3xs,
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