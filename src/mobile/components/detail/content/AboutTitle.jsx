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

const AboutTitle = ({ title, tagRoute, tagDetail, isPrice, price }) => {
  return (
    <View style={styles.containerartworktitleParent}>
      <View style={styles.containerartworktitle}>
        <Text className={'text-white text-2xl font-playfairBold'}>{title}</Text>
        <View style={styles.tagstype}>
          <View style={[styles.artworkWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.artwork}>{tagRoute}</Text>
          </View>
          <View style={[styles.artWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.artwork}>{tagDetail}</Text>
          </View>
        </View>
      </View>
      {isPrice ? (
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, styles.textTypo]}>${price}</Text>
        </View>
      ) : (
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../../assets/vector3.png")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  aboutOfTitle: {
    fontSize: FontSize.headline5Bold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelSmallBold,
    color: Color.surfaceOnSurface,
    textAlign: "left",
  },
  artwork: {
    fontSize: FontSize.typographyLabelSmall_size,
    fontFamily: FontFamily.typographyLabelLarge,
    color: Color.colorWhite,
    textAlign: "left",
  },
  artworkWrapper: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  artWrapper: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: Color.primaryPrimary,
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPrimary,
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
    textAlign: "right",
    color: Color.surfaceOnSurface,
  },
  textTypo: {
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
  },
});

export default AboutTitle;
