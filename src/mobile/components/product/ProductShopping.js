import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import ButtonPrimary from "../button/ButtonPrimary";
import { useNavigation, useTheme } from "@react-navigation/native";

const ProductShopping = ({
  title,
  text,
  price,
  image,
  id
}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() =>
      navigation.navigate('ProductDetail', { ID: id })} className={'w-screen flex flex-col gap-4 items-center justify-center p-2.5'} style={[styles.frameParent, {backgroundColor: colors.surfaceContainerHigh}]}>
      <View>
        <Image style={[styles.componentChild]}
          contentFit={"contain"}
          source={{ uri: image }} />
      </View>
      <View style={[styles.frameGroup]}>
        <View style={{ justifyContent: "space-between" }}>
          <Text numberOfLines={2} style={[styles.product, styles.buyNowTypo, {color: colors.onSurface}]}>{title}</Text>
          <Text style={[styles.product1, styles.textTypo, {color: colors.onSurfaceVarient}]}>{text}</Text>
          <Text style={[styles.text, styles.textTypo, {color: colors.onSurface}]}>${price}</Text>
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
    width: Dimensions.get("screen").width / 3,
    aspectRatio: 1,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  product: {
    fontSize: FontSize.labelLargeBold_size,
    color: Color.surfaceOnSurface,
  },
  product1: {
    fontSize: FontSize.labelSmallRegular_size,
  },
  text: {
    fontSize: FontSize.labelMediumBold_size,
  },
  frameGroup: {
    marginLeft: 10,
    flex: 2,
    justifyContent: "space-around",
  },
  frameParent: {
    borderRadius: Border.br_3xs,
    margin: 5,
    padding: Padding.p_3xs,
    flexDirection: "row",
    gap: 10,
  },
});

export default ProductShopping;