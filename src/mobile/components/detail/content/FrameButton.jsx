import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../../../GlobalStyles";

const FrameButton = ({
  field,
  value,
  propAlignSelf,
  propColor,
}) => {


  return (
    <View style={[styles.fieldParent, propAlignSelf]}>
      <Text style={[styles.field, styles.fieldTypo]}>{field}</Text>
      <Text style={[styles.value, styles.fieldTypo, propColor]}>{value}</Text>
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
  value: {
    color: Color.surfaceOnSurface,
  },
  fieldParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    fontFamily: FontFamily.typographyLabelLarge,
  },
});

export default FrameButton;
