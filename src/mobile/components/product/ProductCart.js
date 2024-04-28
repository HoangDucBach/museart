import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, ColorDark, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import ButtonPrimary from "../button/ButtonPrimary";

const ProductCash = ({
  title,
  text,
  price,
  image,
  number,
}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null]}>
      <View>
        <Image
          style={[styles.componentChild, styles.frameParentLayout]}
          contentFit={"contain"}
          source={{ uri: image }}
        />
      </View>
      <View style={[styles.frameGroup]}>
        <View>
          <Text style={[styles.product, styles.buyNowTypo, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>{title}</Text>
          <Text style={[styles.product1, styles.textTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>{text}</Text>
          <Text style={[styles.text, styles.textTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>${price}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "space-between", alignSelf: "flex-start", alignItems: "center", flexDirection: "row" }}>
              <View style={{ alignSelf: "flex-start" }}>
                <ButtonPrimary
                  image={require("../../assets/group-21.png")}
                  buttonPrimaryBackgroundColor={"unset"}
                  buttonPrimaryPaddingHorizontal={0}
                />
              </View>
              <View>
                <Text style={[styles.textTypo, { fontSize: FontSize.labelLargeBold_size, color: Color.primaryPrimaryFixed }]}>{number}</Text>
              </View>
              <View style={{ alignSelf: "flex-end" }}>
                <ButtonPrimary
                  image={require("../../assets/plusicon.png")}
                  buttonPrimaryBackgroundColor={"unset"}
                  buttonPrimaryPaddingHorizontal={0}
                />
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <View style={{ alignSelf: "flex-end" }}>
                <ButtonPrimary
                  image={require("../../assets/group-22.png")}
                  buttonPrimaryBackgroundColor={"unset"}
                  buttonPrimaryPaddingHorizontal={0}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  frameParentFlexBox: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  frameParentLayout: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  buyNowTypo: {
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo: {
    marginTop: 5,
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    textAlign: "left",
  },
  componentChild: {
    backgroundColor: Color.colorDimgray_100,
    flex: 1,
    aspectRatio: 1,
  },
  product: {
    fontSize: FontSize.labelLargeBold_size,
    color: Color.surfaceOnSurface,
  },
  product1: {
    color: Color.surfaceOnSurfaceVarient,
    fontSize: FontSize.labelSmallRegular_size,
  },
  text: {
    fontSize: FontSize.labelMediumBold_size,
    color: Color.surfaceOnSurfaceVarient,
  },
  frameGroup: {
    marginLeft: 10,
    flex: 2,
    justifyContent: "space-around",
  },
  frameParent: {
    shadowColor: "d9cfbe",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 20,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: Color.surfaceSurfaceContainerHigh,
    borderRadius: Border.br_3xs,
    // overflow: "hidden",
    // alignSelf: "stretch",
    margin: 5,
    padding: Padding.p_3xs,
  },
});

export default ProductCash;