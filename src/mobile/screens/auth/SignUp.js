import * as React from "react";
import { useState, useContext } from "react";
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView, Pressable, TextInput } from "react-native";
// import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/authContext";

const SignUp = () => {
    const navigation = useNavigation();
    const { signup } = useContext(AuthContext);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <LinearGradient colors={['#BE0303', '#1c1a1a', '#000000']} className={'p-4 max-h-screen'}>
            <ScrollView>
                <View style={styles.vectorParent}>
                    <Image
                        style={{ width: 80, height: 67 }}
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
                        <TextInput placeholder="Username"
                            value={username}
                            onChangeText={text => setUsername(text)}
                            className={'text-white font-playfair w-full'}
                            placeholderTextColor={'white'} />
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-191.png")}
                        />
                        <TextInput placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            className={'text-white font-playfair w-full'}
                            placeholderTextColor={'white'} />
                    </View>
                    <View
                        className={'flex flex-row p-4 bg-surfaceContainer-dark rounded-2xl focus:outline-none'}
                    >
                        <Image
                            style={styles.usernamecontainerChild}
                            contentFit="cover"
                            source={require("../../assets/group-201.png")}
                        />
                        <TextInput placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            className={'text-white font-playfair w-full'} placeholderTextColor={'white'} />
                    </View>
                    <Pressable onPress={() => {
                        signup(username, email, password, 'user');
                        navigation.navigate("Home");
                    }}

                        className={'p-4 rounded-2xl bg-primary'}
                    >
                        <Text className={'text-white text-center font-playfairBold'}>Sign Up</Text>
                    </Pressable>
                    <View
                        className={'flex flex-row items-center justify-center'}
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
    usernamecontainerChild: {
        width: 25,
        height: 25,
    },
    alreadyHaveAccount: {
        fontFamily: FontFamily.typographyLabelLarge,
        fontSize: FontSize.labelLargeBold_size,
        color: Color.colorWhite,
        marginRight: 10,
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
