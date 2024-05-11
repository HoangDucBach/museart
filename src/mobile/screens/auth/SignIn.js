import * as React from "react";
import { useState, useContext, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMove, toggleTab } from "../../store";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/authContext";

const SignIn = () => {
    const navigation = useNavigation();
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const { signin } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <LinearGradient colors={['#BE0303', '#1c1a1a', '#000000']} className={'p-4 max-h-screen'}>
            <ScrollView style={{ zIndex: 2 }}>
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
                        <TextInput placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            className={'text-white font-playfair w-full'} placeholderTextColor={'white'} />
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-20.png")}
                        />
                        <TextInput placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true} className={'text-white font-playfair w-full'} placeholderTextColor={'white'} />
                    </View>
                    <Pressable
                        onPress={() => {
                            signin(email, password);
                            navigation.navigate("Home");
                        }}
                        className={'p-4 rounded-xl bg-primary'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Sign in</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate("Home") }}
                        className={'p-4 rounded-2xl bg-secondary/50'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Guest</Text>
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
    usernamecontainerChild: {
        width: 25,
        height: 25,
    },
    dontHaveAccount: {
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.colorWhite,
        marginRight: 15,
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
});

export default SignIn;
