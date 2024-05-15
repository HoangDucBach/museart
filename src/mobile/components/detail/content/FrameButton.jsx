import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const FrameButton = ({ field, value }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.fieldParent}>
      <Text style={[styles.field, styles.fieldTypo]}>{field}</Text>
      <Text style={[styles.fieldTypo, {textAlign: "right", marginLeft: 10, color: colors.onSurface}]}>{value}</Text>
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 15,
    fontFamily: FontFamily.typographyLabelLarge,
    alignSelf: "stretch",
  },
});

export default FrameButton;
