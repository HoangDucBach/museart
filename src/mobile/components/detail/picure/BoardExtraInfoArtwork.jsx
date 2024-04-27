import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../../GlobalStyles";

const BoardExtraInfoArtwork = ({ commentAmount, likeAmount, date }) => {
  return (
    <View style={[styles.boardextrainfoartwork]}>
      <View style={styles.frameParent}>
        <View style={styles.commentParent}>
          <Text style={[styles.comment, styles.textTypo]}>Comment</Text>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../../assets/group-17.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{commentAmount}</Text>
          </View>
        </View>
        <View style={styles.commentParent}>
          <Text style={[styles.comment, styles.textTypo]}>Like</Text>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../../assets/group-192.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{likeAmount}</Text>
          </View>
        </View>
        <View style={styles.commentParent}>
          <View style={styles.commentParent}>
            <Text style={[styles.comment, styles.textTypo]}>Last Updated</Text>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../../../assets/group-15.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.primaryPrimaryFixed,
    fontSize: FontSize.labelLargeBold_size,
  },
  comment: {
    fontFamily: FontFamily.typographyLabelLarge,
  },
  frameChild: {
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.labelSmallBold,
    marginLeft: 10,
  },
  groupParent: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  commentParent: {
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  boardextrainfoartwork: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGray_400,
    overflow: "hidden",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mini,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default BoardExtraInfoArtwork;
