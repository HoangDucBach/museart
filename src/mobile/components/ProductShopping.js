import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import ButtonPrimary from "./ButtonPrimary";

const ProductShopping = ({
    title,
    text,
    price,
    image,
}) => {
    return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View>
        <Image style={[styles.componentChild, styles.frameParentLayout]} 
                contentFit={"contain"}
                source={image} />
      </View>
      <View style={[styles.frameGroup]}>
        <View style={{justifyContent: "space-between"}}>
          <Text style={[styles.product, styles.buyNowTypo]}>{title}</Text>
          <Text style={[styles.product1, styles.textTypo]}>{text}</Text>
          <Text style={[styles.text, styles.textTypo]}>${price}</Text>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
            <View style={{ alignItems: "stretch", flexDirection: "row" }}>
              <View style={{marginRight: 15}}>
                <ButtonPrimary
                  text={"Buy now"}
                  buttonPrimaryPaddingVerticalVertical={10}  
                  buttonPrimaryBorderWidth={2}                
                  buttonPrimaryPaddingHorizontal={15}
                  />
              </View>
              <View>
                <ButtonPrimary 
                  buttonPrimaryBackgroundColor={"unset"}
                  buttonPrimaryPaddingVerticalVertical={10}                  
                  buttonPrimaryPaddingHorizontal={15}
                  buttonPrimaryBorderWidth={2}
                  image={require("../assets/vector2.png")}/>
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
    fontFamily: FontFamily.headline2Bold,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo: {
    marginTop: 5,
    fontFamily: FontFamily.headline2Bold,
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
    margin: 5,
    padding: Padding.p_3xs,
  },
});

export default ProductShopping;