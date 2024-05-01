import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../../GlobalStyles";

const Button = () => {
  return (
    <View style={styles.Button}>
      <View style={styles.audiobuttonBorder}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../../assets/-icon-headset.png")}
        />
        <Text style={styles.audio}>Audio</Text>
      </View>
      <View style={[styles.autoplaybutton, styles.audiobuttonBorder]}>
        <Image
          style={styles.iconKeyboardArrowDown}
          contentFit="cover"
          source={require("../../../assets/-icon-keyboard-arrow-down.png")}
        />
        <Text style={styles.audio}>Autoplay</Text>
      </View>
      <View style={[styles.autoplaybutton, styles.audiobuttonBorder]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/vector5.png")}
        />
        <Text style={styles.audio}>Save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  audiobuttonBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.primaryPrimary1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  audio: {
    fontSize: FontSize.labelLargeBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headline5Bold,
    color: Color.primaryPrimary1,
    textAlign: "left",
    marginLeft: 15,
  },
  iconKeyboardArrowDown: {
    width: 20,
    height: 10,
  },
  autoplaybutton: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.primaryPrimary1,
    borderStyle: "solid",
  },
  vectorIcon: {
    borderRadius: Border.br_3xs,
    width: 16,
  },
  Button: {
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Button;
