import React, { useMemo, useState } from "react";
import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimary = ({
  text,
  textColor,
  textSize,
  textMarginHorizontal,
  textMarginVertical,
  image,
  buttonPrimaryBackgroundColor,
  buttonPrimaryBorderWidth,
  buttonPrimaryFlex,
  buttonPrimaryPosition,
  buttonPrimaryAlignSelf,
  buttonPrimaryMarginTop,
  buttonPrimaryMarginLeft,
  buttonPrimaryPaddingHorizontal,
  buttonPrimaryPaddingVertical,
  onPressButton,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", buttonPrimaryBackgroundColor),
      ...getStyleValue("borderWidth", buttonPrimaryBorderWidth),
      ...getStyleValue("flex", buttonPrimaryFlex),
      ...getStyleValue("position", buttonPrimaryPosition),
      ...getStyleValue("alignSelf", buttonPrimaryAlignSelf),
      ...getStyleValue("marginTop", buttonPrimaryMarginTop),
      ...getStyleValue("marginLeft", buttonPrimaryMarginLeft),
      ...getStyleValue("paddingHorizontal", buttonPrimaryPaddingHorizontal),
      ...getStyleValue("paddingVertical", buttonPrimaryPaddingVertical),
    };
  }, [
    buttonPrimaryBackgroundColor,
    buttonPrimaryBorderWidth,
    buttonPrimaryFlex,
    buttonPrimaryPosition,
    buttonPrimaryAlignSelf,
    buttonPrimaryMarginTop,
    buttonPrimaryMarginLeft,
    buttonPrimaryPaddingHorizontal,
    buttonPrimaryPaddingVertical,
  ]);

  const textLayoutStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
      ...getStyleValue("fontSize", textSize),
      ...getStyleValue("marginHorizontal", textMarginHorizontal),
      ...getStyleValue("marginVertical", textMarginVertical),
    };
  }, [
    textColor,
    textSize,
    textMarginHorizontal,
    textMarginVertical,
  ]);

  return (
    <Pressable onPress={onPressButton} style={[styles.buttonprimary, buttonPrimaryStyle]}>
      {image !== "unset" ? <Image source={image} /> : null}
      <Text style={[styles.textLayout, textLayoutStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    fontSize: FontSize.labelMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelMediumBold,
    color: Color.primaryOnPrimary,
    textAlign: "center",
  },
  buttonprimary: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPrimary,
    borderColor: Color.primaryPrimary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
});

export default ButtonPrimary;
