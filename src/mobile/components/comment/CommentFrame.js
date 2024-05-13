import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Padding, Color, ColorDark, FontFamily, Border, FontSize } from "../../GlobalStyles";

const CommentFrame = ({
  userName,
  date,
  text,
}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    // <View style={{}}>
    <View style={[styles.frameParent, styles.usercommentSpaceBlock, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]}>
      <View style={styles.usernameParent}>
        <Text style={[styles.username, styles.usernameTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>{userName}</Text>
        <Text style={[styles.ddmmyyyy, styles.usernameTypo, isDarkMode ? { color: ColorDark.primaryPrimary } : null]}>{date}</Text>
      </View>
      <Text
        style={[styles.text, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>
        {text}
      </Text>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  usercommentSpaceBlock: {
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  usernameTypo: {
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    textAlign: "left",
  },
  username: {
    fontSize: FontSize.labelLargeBold_size,
    color: Color.surfaceOnSurfaceVarient,
  },
  ddmmyyyy: {
    fontSize: FontSize.size_sm,
    color: Color.primaryPrimary,
  },
  usernameParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.typographyLabelLarge,
    color: Color.surfaceOnSurface,
    marginTop: 10,
    fontSize: FontSize.labelLargeBold_size,
    alignSelf: "stretch",
    textAlign: "left",
  },
  frameParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    marginVertical: 10,
    alignSelf: "stretch",
  },
});

export default CommentFrame;
