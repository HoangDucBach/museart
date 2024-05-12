import * as React from "react";
import {Text, StyleSheet, View, Image, ImageBackground, ScrollView, Pressable, TextInput} from "react-native";
// import { Image } from "expo-image";
import {useNavigation} from "@react-navigation/native";
import {FontFamily, Color, Padding, FontSize, Border} from "../../GlobalStyles";
import {LinearGradient} from "expo-linear-gradient";
import axios from "axios";
import { baseUrl, localhost } from "../../services/api";
import { useState } from "react";

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            console.log("confirm password incorrect")
            return;
        }
        var payload = {
            username: `${email}`,
            email: `${email}`,
            password: `${password}`,
            role: "",
        }
        try {
            const res = await axios.post(`${localhost}/auth/signup`, payload);
            if (res.status === 200) {
                console.log("SignUp successfully");
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <LinearGradient colors={['#BE0303', '#1c1a1a', '#000000']} className={'flex-1 p-4 max-h-screen'}>
            <ScrollView>
                <View style={styles.vectorParent}>
                    <Image
                        style={{width: 80, height: 67}}
                        contentFit="cover"
                        source={require("../../assets/vector9.png")}
                    />
                    <Text style={[styles.museart]} className={'text-center'}>Museart</Text>
                </View>
                <View className={'flex flex-col gap-4'}>
                    <Text className={'text-2xl text-white w-full font-playfairBold'}>Let start!</Text>
                    <Text className={'text-white text-xl font-playfair'}>
                        Create a new account
                    </Text>
                </View>
                <View className={'flex flex-col gap-4 mt-4'}>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-191.png")}
                        />
                        <TextInput placeholder="Username" onChangeText={ text => setEmail(text) } className={'text-white font-playfair w-full'}
                                   placeholderTextColor={'white'}/>
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-201.png")}
                        />
                        <TextInput placeholder="Password" onChangeText={ text => setPassword(text) } secureTextEntry={true}
                                   className={'text-white font-playfair w-full'} placeholderTextColor={'white'}/>
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-201.png")}
                        />

                        <TextInput placeholder="Confirm password" onChangeText={ text => setConfirmPassword(text) } secureTextEntry={true}
                                   className={'text-white font-playfair w-full'} placeholderTextColor={'white'}/>
                    </View>
                    <Pressable onPress={ () => handleSignUp() }
                               className={'p-4 rounded-2xl bg-primary'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Sign Up</Text>
                    </Pressable>
                    <View
                        className={'flex flex-row gap-4 items-center'}
                    >
                        <Text style={styles.alreadyHaveAccount}>Already have account?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Text
                                className={'text-white font-playfairBold'}
                            >Sign in</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.ellipseParent}>
                <Image
                    style={styles.frameLayout}
                    contentFit="cover"
                    source={require("../../assets/ellipse-5.png")}
                />
                <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../../assets/ellipse-6.png")}
                />
                <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../../assets/ellipse-6.png")}
                />
                <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../../assets/ellipse-6.png")}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    signUpBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    vectorParent: {
        marginTop: 50,
        height: 138,
        alignSelf: "stretch",
        alignItems: "center",
        flex: 1,
    },
    museart: {
        marginTop: 15,
        color: Color.colorWhite,
        alignSelf: "stretch",
        fontSize: FontSize.titleMediumBold_size,
        fontFamily: FontFamily.labelMediumBold,
    },
    signUpTypo: {
        textAlign: "center",
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    letStartParent: {
        alignSelf: "stretch",
        marginLeft: 10,
        flex: 2,
    },
    letStart: {
        fontSize: FontSize.headline2Bold_size,
    },
    museart1Typo: {
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
        alignSelf: "stretch",
    },
    createANew: {
        fontSize: FontSize.headline3Bold_size,
        marginTop: 15,
        color: Color.colorWhite,
        alignSelf: "stretch",
    },
    usernameTypo: {
        fontFamily: FontFamily.typographyLabelLarge,
        textAlign: "left",
    },
    usernamecontainerParent: {
        alignSelf: "stretch",
        alignItems: "center",
        paddingTop: 20,
        margin: 10,
        flex: 3,
    },
    signupbuttonSpaceBlock: {
        padding: Padding.p_mini,
        alignItems: "center",
    },
    usernamecontainer: {
        flexDirection: "row",
        backgroundColor: Color.surfaceSurfaceContainerHighest,
        borderRadius: Border.br_81xl,
        padding: Padding.p_mini,
        alignSelf: "stretch",
        overflow: "hidden",
    },
    usernamecontainerChild: {
        width: 25,
        height: 25,
    },
    passwordcontainer: {
        flexDirection: "row",
        backgroundColor: Color.surfaceSurfaceContainerHighest,
        borderRadius: Border.br_81xl,
        padding: Padding.p_mini,
        alignSelf: "stretch",
        overflow: "hidden",
        marginTop: 15,
    },
    username: {
        fontSize: FontSize.labelMediumBold_size,
        color: Color.surfaceOnSurfaceVarient,
        marginLeft: 5,
        flex: 1,
    },
    signupbutton: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primaryPrimary,
        padding: Padding.p_mini,
        marginTop: 15,
        alignItems: "center",
        alignSelf: "stretch",
    },
    signUp: {
        fontSize: FontSize.labelLargeBold_size,
        color: Color.primaryOnPrimary,
    },
    alreadyHaveAccountParent: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15,
    },
    alreadyHaveAccount: {
        fontFamily: FontFamily.typographyLabelLarge,
        fontSize: FontSize.labelLargeBold_size,
        color: Color.colorWhite,
        marginRight: 10,
    },
    signIn: {
        color: Color.colorWhite,
        fontFamily: FontFamily.labelMediumBold,
        fontSize: FontSize.labelLargeBold_size,
        fontWeight: "700",
    },
    frameLayout: {
        height: 15,
        width: 15,
    },
    ellipseParent: {
        flexDirection: "row",
        alignSelf: "center",
        bottom: 20,
    },
    frameItem: {
        marginLeft: 15,
    },
});

export default SignUp;
