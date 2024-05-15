import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
} from "../../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const AboutTitle = ({ title, tagRoute, tagDetail, isPrice, price }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.containerartworktitleParent}>
      <View style={styles.containerartworktitle}>
        <Text className={'text-2xl font-playfairBold'} style={{color: colors.onSurface}}>{title}</Text>
        <View style={styles.tagstype}>
          <View style={[styles.artworkWrapper]}>
            <Text style={{color: colors.onSurface}}>{tagRoute}</Text>
          </View>
          <View style={[styles.artworkWrapper]}>
            <Text style={{color: colors.onSurface}}>{tagDetail}</Text>
          </View>
        </View>
      </View>
      {isPrice ? (
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, {color: colors.onSurface}]}>${price}</Text>
        </View>
      ) : (
        <View style={[styles.vectorWrapper, {backgroundColor: colors.primary}]}>
          <Image
            style={[styles.vectorIcon, {backgroundColor: colors.primary}]}
            contentFit="cover"
            source={require("../../../assets/vector3.png")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // aboutOfTitle: {
  //   fontSize: FontSize.headline5Bold_size,
  //   fontWeight: "700",
  //   fontFamily: FontFamily.labelSmallBold,
  //   color: Color.surfaceOnSurface,
  //   textAlign: "left",
  // },
  // artwork: {
  //   fontSize: FontSize.typographyLabelSmall_size,
  //   fontFamily: FontFamily.typographyLabelLarge,
  //   color: Color.colorWhite,
  //   textAlign: "left",
  // },
  artworkWrapper: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tagstype: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  containerartworktitle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 15,
    width: "75%",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  containerartworktitleParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  text: {
    fontSize: FontSize.bodyXlargeBold_size,
    fontFamily: FontFamily.labelMediumBold,
    textAlign: "right",
    fontWeight: "700",
  },
});

export default AboutTitle;
