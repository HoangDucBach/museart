import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
} from "../../../GlobalStyles";

const Button = ({ audioPress, autoplayPress, savePress }) => {
  return (
    <View style={styles.Button}>
      <TouchableOpacity style={styles.audiobuttonBorder} onPress={audioPress}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../../assets/-icon-headset.png")}
        />
        <Text style={styles.audio}>Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={autoplayPress}
        style={styles.audiobuttonBorder}
      >
        <Image
          style={styles.iconKeyboardArrowDown}
          contentFit="cover"
          source={require("../../../assets/-icon-keyboard-arrow-down.png")}
        />
        <Text style={styles.audio}>Autoplay</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={savePress} style={styles.audiobuttonBorder}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../../assets/vector5.png")}
        />
        <Text style={styles.audio}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  audiobuttonBorder: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: Color.primaryPrimary1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    gap: 10,
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
  },
  iconKeyboardArrowDown: {
    width: 20,
    height: 10,
  },
  Button: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginTop: 15,
  },
});

export default Button;
