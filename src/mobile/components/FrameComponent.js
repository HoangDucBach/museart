import * as React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { ImageBackground } from "react-native";


const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FrameComponent = ({
  onFramePressablePress,
  frameFlex,
  frameAspectRatio,
  frameImage,
  height,
  title,
  text,

}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const frameScale = useMemo(() => {
    return {
      ...getStyleValue("flex", frameFlex),
      ...getStyleValue("aspectRatio", frameAspectRatio)
    };
  }, [frameFlex, frameAspectRatio]
  );

  return (
    <Pressable style={[styles.frameWrapper, frameScale]} onPress={onFramePressablePress}>
      <ImageBackground
        source={{ uri: frameImage }}
        height={height}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.titleParent}>
          <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
          <Text style={[styles.title1, styles.titleFlexBox]} numberOfLines={2}>{text}</Text>
        </View>
      </ImageBackground>
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
    fontSize: FontSize.labelSmallRegular_size,
    fontWeight: "300",
    fontFamily: FontFamily.labelLargeMedium,
    // marginTop: 5,
  },
  titleParent: {
    flex: 1,
    margin: 10,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  frameWrapper: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumseagreen_200,
    justifyContent: "flex-end",
    // padding: Padding.p_3xs,
    margin: 5,
    overflow: "hidden",
  },
});

export default FrameComponent;
