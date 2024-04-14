import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const FrameComponent1 = ({ onFramePressablePress }) => {
  return (
    <Pressable style={styles.frameWrapper} onPress={onFramePressablePress}>
      <View style={styles.titleParent}>
        <Text style={[styles.title, styles.titleFlexBox]}>Title</Text>
        <Text style={[styles.title1, styles.titleFlexBox]}>Title</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    color: Color.primaryOnPrimary,
  },
  title: {
    fontSize: FontSize.titleMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelMediumBold,
  },
  title1: {
    fontSize: FontSize.labelMediumBold_size,
    fontWeight: "300",
    fontFamily: FontFamily.labelLargeMedium,
    marginTop: 5,
  },
  titleParent: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameWrapper: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_200,
    height: 113,
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
});

export default FrameComponent1;
