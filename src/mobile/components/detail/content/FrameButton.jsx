import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../../../GlobalStyles";

const FrameButton = ({ field, value, propColor }) => {
  return (
    <View style={styles.fieldParent}>
      <Text style={[styles.field, styles.fieldTypo]}>{field}</Text>
      <Text style={[styles.fieldTypo, propColor]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldTypo: {
    textAlign: "left",
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    fontSize: FontSize.labelLargeBold_size,
  },
  field: {
    color: Color.primaryPrimaryFixed,
  },
  fieldParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    fontFamily: FontFamily.typographyLabelLarge,
    alignSelf: "stretch",
  },
});

export default FrameButton;
