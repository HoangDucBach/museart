import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Color, ColorDark, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import ButtonPrimary from "../button/ButtonPrimary";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductShopping = ({
  title,
  text,
  price,
  image,
  id
}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() =>
      navigation.navigate('ProductDetail', { ID: id })} style={[styles.frameParent, styles.frameParentFlexBox, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null]}>
      <View>
        <Image style={[styles.componentChild, styles.frameParentLayout]}
          contentFit={"contain"}
          source={{ uri: image }} />
      </View>
      <View style={[styles.frameGroup]}>
        <View style={{ justifyContent: "space-between" }}>
          <Text numberOfLines={3} style={[styles.product, styles.buyNowTypo, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>{title}</Text>
          <Text style={[styles.product1, styles.textTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>{text}</Text>
          <Text style={[styles.text, styles.textTypo, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>${price}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <View style={{ alignItems: "stretch", flexDirection: "row" }}>
            <View style={{ marginRight: 15 }}>
              <ButtonPrimary
                text={"Buy now"}
                buttonPrimaryPaddingVerticalVertical={10}
                buttonPrimaryBorderWidth={2}
                buttonPrimaryPaddingHorizontal={15}
                onPressButton={() => { navigation.navigate('Payment', { Amount: 1, Price: price }) }}
              />
            </View>
            <View>
              <ButtonPrimary
                buttonPrimaryBackgroundColor={"unset"}
                buttonPrimaryPaddingVerticalVertical={10}
                buttonPrimaryPaddingHorizontal={15}
                buttonPrimaryBorderWidth={2}
                onPressButton={() => { navigation.navigate('Cart') }}
                image={require("../../assets/vector2.png")} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    color: Color.surfaceOnSurface,
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
    margin: 5,
    padding: Padding.p_3xs,
  },
});

export default ProductShopping;