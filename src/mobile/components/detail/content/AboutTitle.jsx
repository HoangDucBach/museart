import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const AboutTitle = () => {
  return (
    <View style={styles.containerartworktitleParent}>
      <View style={styles.containerartworktitle}>
        <View style={styles.artworktitle}>
          <Text style={styles.aboutOfTitle}>About of title of picture</Text>
        </View>
        <View style={styles.tagstype}>
          <View style={[styles.artworkWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.artwork}>Artwork</Text>
          </View>
          <View style={[styles.artWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.artwork}>Art</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperSpaceBlock}>
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../../assets/vector3.png")}
          />
        </View>
      </View>
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
  artworktitle: {
    alignItems: "left",
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
    marginLeft: 15,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  tagstype: {
    marginTop: 15,
    flexDirection: "row",
  },
  containerartworktitle: {
    width: 381,
    height: 85,
    justifyContent: "center",
  },
  vectorIcon: {    
    backgroundColor: Color.primaryPrimary,
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPrimary,
    height: 45,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  containerartworktitleParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default AboutTitle;
