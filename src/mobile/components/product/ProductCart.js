import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import ButtonPrimary from "../button/ButtonPrimary";
import { useNavigation, useTheme } from "@react-navigation/native";

const ProductCash = ({
  id,
  title,
  text,
  price,
  image,
  amount,
  onAmoutChange,
}) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [number, setNumber] = useState(amount);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    onAmoutChange(id, number);
  }, [number]);

  useEffect(() => {
    if (deleted) setNumber(0);
  }, [deleted]);

  if (deleted) return;
  return (
    <View className={'w-screen items-center justify-center px-2.5'}>
      <TouchableOpacity onPress={() =>
        navigation.navigate('ProductDetail', { ID: id })} className={'p-2.5'} style={[styles.frameParent, {backgroundColor: colors.surfaceContainerHigh, shadowColor: colors.primaryShadow}]}>
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
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, justifyContent: "space-between", alignSelf: "flex-start", alignItems: "center", flexDirection: "row" }}>
                <View style={{ alignSelf: "flex-start" }}>
                  <ButtonPrimary
                    image={require("../../assets/group-21.png")}
                    buttonPrimaryBackgroundColor={"unset"}
                    buttonPrimaryPaddingHorizontal={0}
                    onPressButton={() => { if (number > 1) setNumber(number - 1) }}
                  />
                </View>
                <View>
                  <TextInput style={[styles.textTypo, { marginTop: 0, fontSize: FontSize.labelLargeBold_size, color: Color.primaryPrimaryFixed }]}
                              value={String(number)}
                              onChangeText={text => setNumber(text)}
                              onEndEditing={() => {
                                if (number < 1) setNumber(1);
                                else if (number > 99) setNumber(99);
                                }}
                              />
                </View>
                <View style={{ alignSelf: "flex-end" }}>
                  <ButtonPrimary
                    image={require("../../assets/plusicon.png")}
                    buttonPrimaryBackgroundColor={"unset"}
                    buttonPrimaryPaddingHorizontal={0}
                    onPressButton={() => { if (number < 99) setNumber(number + 1) }}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ alignSelf: "flex-end" }}>
                  <ButtonPrimary
                    image={require("../../assets/group-22.png")}
                    buttonPrimaryBackgroundColor={"unset"}
                    buttonPrimaryPaddingHorizontal={0}
                    onPressButton={() => setDeleted(true)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  buyNowTypo: {
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo: {
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 10,
    padding: Padding.p_3xs,
    flexDirection: "row",
    gap: 10,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});

export default ProductCash;