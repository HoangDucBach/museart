import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const AboutArtist = ({ text }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.aboutArtistContainer, styles.tagartistofartworkFlexBox]}>
      <Image
        style={styles.aboutTheArtistChild}
        contentFit="cover"
        source={{
          uri: "https://fastly.picsum.photos/id/391/200/300.jpg?hmac=3xP-y2PRN2E0__aPOCp1sja7XrimKgLQAMiSaNd0Cko",
        }}
      />
      <View style={[styles.tagartistofartwork, styles.tagartistofartworkFlexBox, {backgroundColor: colors.primary}]}>
        <Text style={[styles.aboutArtist, {color: colors.onPrimary}]}>Artist: {text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagartistofartworkFlexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  aboutTheArtistChild: {
    borderRadius: 150 / 2,
    overflow: "hidden",
    width: 75,
    height: 75,
  },
  aboutArtist: {
    fontSize: FontSize.labelMediumBold_size,
    fontFamily: FontFamily.typographyLabelLarge,
    textAlign: "center",
  },
  tagartistofartwork: {
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
  },
  aboutArtistContainer: {
    marginTop: 15,
  },
});

export default AboutArtist;
