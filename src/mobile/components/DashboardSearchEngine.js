import * as React from "react";
import { StyleSheet, View, Image, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const DashboardSearchEngine = () => {

  const onFrame41Press = () => {console.log("press frame-41")}
  const onFrame40Press = () => {console.log("press frame-40")}

  return (
    <View style={styles.dashboardsearchengine}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <TextInput placeholder="Search picture, product, . . ." style={styles.searchPictureProduct}/>
      <Pressable onPress={onFrame41Press}>
        <Image
          style={styles.dashboardsearchengineChild}
          contentFit="cover"
          source={require("../assets/frame-41.png")}
        />
      </Pressable>
      <Pressable onPress={onFrame40Press}>
        <Image
          style={styles.dashboardsearchengineChild}
          contentFit="cover"
          source={require("../assets/frame-40.png")}
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
    color: Color.surfaceOnSurfaceVarient,
    textAlign: "left",
    marginLeft: 5,
  },
  dashboardsearchengineChild: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  dashboardsearchengine: {
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    flexDirection: "row",
    padding: Padding.p_mini,
    marginTop: 15,
  },
});

export default DashboardSearchEngine;
