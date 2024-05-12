import * as React from "react";
import {useState} from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    Pressable,
    TextInput,
    ScrollView
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontFamily, Padding, Color, Border, FontSize} from "../../GlobalStyles";
import {useDispatch, useSelector} from "react-redux";
import {toggleMove, toggleTab} from "../../store";
import {LinearGradient} from "expo-linear-gradient";
import axios from "axios";
import { localhost } from "../../services/api";

const SignIn = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const handleSignIn = async () => {
        var payload = {
            email: `${email}`,
            password: `${password}`,
        }
        console.log(payload);
        try{
            const res = await axios.post(`${localhost}/auth/signin`, payload);
            console.log(res);
            if (res.status === 200) {
                // Xử lý đăng nhập thành công
                setIsLoggedIn(true);
                dispatch(toggleMove(1));
                dispatch(toggleTab("Artworks"));
                navigation.navigate("Artworks");
            } else {
                console.log("Login failed !!!");
            }
        } catch(error) {
            console.log(error);
        }
        // console.log(isLoggedIn);
    };

    const handleGuess = () => {
        setIsLoggedIn(true);
        dispatch(toggleMove(1));
        dispatch(toggleTab("Artworks"));
    }
    return (
        <LinearGradient colors={['#BE0303', '#1c1a1a','#000000']} className={'flex-1 p-4 max-h-screen'}>
            <ScrollView style={{zIndex: 2}}>
                <SafeAreaView style={styles.vectorParent}>
                    <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={require("../../assets/vector8.png")}
                    />
                    <Text style={styles.museart}>Museart</Text>
                </SafeAreaView>
                <View className={'flex flex-col gap-4'}>
                    <Text className={'text-2xl text-white w-full font-playfairBold'}>
                        Welcome to online museum!
                    </Text>
                    <Text className={'text-white text-xl font-playfair'}>
                        Sign in to explore all artworks from around the world.
                    </Text>
                </View>
                <View className={'flex flex-col gap-4 mt-4 text-onSurface-dark'}>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-19.png")}
                        />
                        <TextInput placeholder="Username" onChangeText={(text) => setEmail(text)} className={'text-white font-playfair w-full'} placeholderTextColor={'white'}/>
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-20.png")}
                        />
                        <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} className={'text-white font-playfair w-full'} placeholderTextColor={'white'}/>
                    </View>
                    <Pressable
                        onPress={ async () => {
                            await handleSignIn();
                            console.log(isLoggedIn);
                            if (isLoggedIn) {
                                setIsLoggedIn(false);
                            }
                        }}
                        className={'p-4 rounded-xl bg-primary'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Sign in</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        handleGuess();
                        navigation.navigate("Artworks");
                    }}
                               className={'p-4 rounded-2xl bg-secondary/50'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Guess</Text>
                    </Pressable>
                    <View className={'flex flex-row items-center w-full justify-center'}>
                        <Text style={[styles.dontHaveAccount, styles.signTypo]}>
                            Don’t have account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate("SignUp")}>
                            <Text
                                className={'text-white font-playfairBold'}
                            >Sign up</Text>
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
    signTypo1: {
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    usernamecontainerFlexBox: {
        padding: Padding.p_mini,
        backgroundColor: Color.surfaceSurfaceContainerHighest,
        borderRadius: Border.br_81xl,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden",
    },
    signinbuttonSpaceBlock: {
        borderRadius: Border.br_3xs,
        padding: Padding.p_mini,
        marginTop: 15,
        alignItems: "center",
    },
    signTypo: {
        fontSize: FontSize.labelLargeBold_size,
        textAlign: "center",
    },
    frameLayout: {
        height: 15,
        width: 15,
    },
    vectorIcon: {
        width: 80,
        height: 67,
    },
    museart: {
        fontSize: FontSize.titleMediumBold_size,
        marginTop: 15,
        color: Color.colorWhite,
        fontFamily: FontFamily.labelMediumBold,
    },
    vectorParent: {
        marginTop: 50,
        height: 138,
        alignSelf: "stretch",
        alignItems: "center",
        flex: 1,
    },
    welcomeToOnline: {
        fontSize: FontSize.headline2Bold_size,
        textAlign: "left",
        color: Color.colorWhite,
        alignSelf: "stretch",
        fontFamily: FontFamily.labelMediumBold,
    },
    signInTo: {
        fontSize: FontSize.headline3Bold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        fontWeight: "400",
        textAlign: "left",
        marginTop: 15,
        color: Color.colorWhite,
        alignSelf: "stretch",
    },
    welcomeToOnlineMuseumParent: {
        alignSelf: "stretch",
        marginLeft: 10,
        flex: 2,
    },
    usernamecontainerChild: {
        width: 25,
        height: 25,
    },
    username: {
        fontSize: FontSize.labelMediumBold_size,
        color: Color.surfaceOnSurface,
        marginLeft: 5,
        fontFamily: FontFamily.typographyLabelLarge,
        textAlign: "left",
        flex: 1,
    },
    passwordcontainer: {
        marginTop: 15,
    },
    signIn1: {
        color: Color.primaryOnPrimary,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    signinbutton: {
        backgroundColor: Color.primaryPrimary,
        alignSelf: "stretch",
        marginHorizontal: 10,
    },
    guessbutton: {
        backgroundColor: Color.primaryPrimaryFixed,
        alignSelf: "stretch",
        marginHorizontal: 10,
    },
    dontHaveAccount: {
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.colorWhite,
        marginRight: 15,
    },
    signUp: {
        color: Color.colorWhite,
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    dontHaveAccountParent: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15,
        alignSelf: "stretch",
    },
    usernamecontainerParent: {
        paddingTop: 20,
        // paddingBottom: Padding.p_31xl,
        margin: 10,
        alignSelf: "stretch",
        alignItems: "center",
        flex: 3,
    },
    frameItem: {
        marginLeft: 15,
    },
    ellipseParent: {
        zIndex: 1,
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
        bottom: 20,
    },
    signinBackground: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
});

export default SignIn;
