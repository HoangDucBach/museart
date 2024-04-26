import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";
import NavbarTop from "../components/NavbarTop";
import SettingsMenu from "../components/SettingsMenu";
import ButtonPrimary from "../components/ButtonPrimary";

const Payment = ({
    numberOfProduct,
    totalAmount,
    
}) => {

    const navigation = useNavigation();

    return (
        <View style={[styles.paymentContainer]}>
            <NavbarTop/>
            <View style={{padding: 10, flex: 1}}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text style={styles.headline}>Payment</Text>
                </View>
                <View style={[styles.totalContainer]}>
                    <View style={{marginBottom: 15}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={[styles.headline, styles.headline1]}>Total</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                            <Text style={styles.text1}>Number of products</Text>
                            <Text style={[styles.text1, {color: Color.surfaceOnSurface}]}>{numberOfProduct}</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                            <Text style={styles.text2}>Total</Text>
                            <Text style={[styles.text2, {color: Color.surfaceOnSurface}]}>{totalAmount}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={[styles.headline, styles.headline1]}>Information</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                            <View style={[styles.textInContainer]}>
                                <TextInput placeholder="Your Name" style={[styles.textLayout]}/>
                            </View>                            
                            <View style={[styles.textInContainer, {marginLeft: 15}]}>
                                <TextInput placeholder="+84" style={[styles.textLayout]}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={[styles.headline, styles.headline1]}>Address</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                            <View style={[styles.textInContainer]}>
                                <TextInput placeholder="Your Wards" style={[styles.textLayout]}/>
                            </View>                            
                            <View style={[styles.textInContainer, {marginLeft: 15}]}>
                                <TextInput placeholder="+Your Province" style={[styles.textLayout]}/>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={[styles.textInContainer, {marginTop: 15}]}>
                                    <Image source={require("../assets/Frame 83.png")}/>
                                    <TextInput placeholder="Your detail address" style={[styles.textLayout]}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <View style={{marginBottom: 15}}>
                            <Text style={[styles.headline, styles.headline1]}>Pay method</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"flex-start"}}>
                            <ButtonPrimary
                                image={require("../assets/frame.png")}
                                buttonPrimaryBackgroundColor={Color.surfaceSurfaceContainerHighest}
                                />
                            <ButtonPrimary
                                image={require("../assets/frame1.png")}
                                buttonPrimaryBackgroundColor={Color.surfaceSurfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                                />
                            <ButtonPrimary
                                image={require("../assets/frame2.png")}
                                buttonPrimaryBackgroundColor={Color.surfaceSurfaceContainerHighest}
                                buttonPrimaryMarginLeft={15}
                                />
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View style={{flex: 1, }}>
                        <View style={{flex: 1, flexDirection: "row", justifyContent:"space-between"}}>
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
        flex: 1,
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
        flex: 1,
        padding: 10,
        marginTop: 15,
        backgroundColor: Color.surfaceSurfaceContainer,
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
    textLayout:{
        flex: 1,
        fontSize: FontSize.labelMediumBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.surfaceOnSurfaceVarient,
        textAlign: "left",
        marginLeft: 5,
    }
})

export default Payment;