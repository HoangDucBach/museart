import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";


const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FrameComponent = ({
  onFramePressablePress,
  frameFlex,
  frameAspectRatio,
}) => {

  const frameScale =  useMemo(() => {
    return {
      ...getStyleValue("flex", frameFlex),
      ...getStyleValue("aspectRatio", frameAspectRatio)
    };
  }, [frameFlex, frameAspectRatio]
  );

  return (
    <Pressable style={[styles.frameWrapper, frameScale]} onPress={onFramePressablePress}>
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
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
    margin: 5,
    overflow: "hidden",
  },
});

export default FrameComponent;
