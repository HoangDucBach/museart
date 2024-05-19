import * as React from "react";
import { StyleSheet, View, Image, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Border } from "../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const DashboardSearchEngine = ({ children }) => {

  const onFrame41Press = () => { console.log("press frame-41") }
  const onFrame40Press = () => { console.log("press frame-40") }
  const { colors } = useTheme();

  return (
    <View style={[styles.dashboardsearchengine, {backgroundColor: colors.surfaceContainerHighest}]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../../assets/vector1.png")}
      />
      <TextInput placeholder="Search picture, product, . . ." placeholderTextColor={colors.onSurfaceVarient} style={[styles.searchPictureProduct, {color: colors.onSurface}]} />
      <Pressable onPress={onFrame41Press}>
        <Image
          style={styles.dashboardsearchengineChild}
          contentFit="cover"
          source={require("../../assets/frame-41.png")}
        />
      </Pressable>
      <Pressable onPress={onFrame40Press}>
        <Image
          style={styles.dashboardsearchengineChild}
          contentFit="cover"
          source={require("../../assets/frame-40.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 20,
    height: 20,
  },
  searchPictureProduct: {
    flex: 1,
    fontSize: FontSize.labelMediumBold_size,
    fontFamily: FontFamily.typographyLabelLarge,
    textAlign: "left",
    marginLeft: 10,
  },
  dashboardsearchengineChild: {
    width: 25,
    height: 25,
  },
  dashboardsearchengine: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
});

export default DashboardSearchEngine;
