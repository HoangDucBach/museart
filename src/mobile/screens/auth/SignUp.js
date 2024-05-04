import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView, Pressable, TextInput } from "react-native";
// import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.signUpBackground}
      resizeMode="cover"
      source={require("../../assets/backgroundSignIn.png")}
    ><ScrollView>
        <View style={styles.vectorParent}>
          <Image
            style={{ width: 80, height: 67 }}
            contentFit="cover"
            source={require("../../assets/vector9.png")}
          />
          <Text style={[styles.museart, styles.signUpTypo]}>Museart</Text>
        </View>
        <View style={styles.letStartParent}>
          <Text style={[styles.letStart, styles.museart1Typo]}>Let start!</Text>
          <Text style={[styles.createANew, styles.usernameTypo]}>
            Create a new account
          </Text>
        </View>
        <View style={styles.usernamecontainerParent}>
          <View style={[styles.usernamecontainer, styles.signupbuttonSpaceBlock]}>
            <Image
              style={styles.usernamecontainerChild}
              contentFit="cover"
              source={require("../../assets/group-191.png")}
            />
            <TextInput placeholder="Username" style={[styles.username, styles.usernameTypo]} />
          </View>
          <View style={[styles.passwordcontainer, styles.signupbuttonSpaceBlock]}>
            <Image
              style={styles.usernamecontainerChild}
              contentFit="cover"
              source={require("../../assets/group-201.png")}
            />
            <TextInput placeholder="Password" secureTextEntry={true} style={[styles.username, styles.usernameTypo]} />
          </View>
          <View style={[styles.passwordcontainer, styles.signupbuttonSpaceBlock]}>
            <Image
              style={styles.usernamecontainerChild}
              contentFit="cover"
              source={require("../../assets/group-201.png")}
            />
            <TextInput placeholder="Confirm password" secureTextEntry={true} style={[styles.username, styles.usernameTypo]} />
          </View>
          <Pressable onPress={() => console.log("sign up account")}
            style={styles.signupbutton}>
            <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
          </Pressable>
          <View style={styles.alreadyHaveAccountParent}>
            <Text style={styles.alreadyHaveAccount}>Already have account?</Text>
            <Pressable
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.signIn}>Sign in</Text>
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
    </ImageBackground>
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
