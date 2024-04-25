import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BoardExtraInfoArtwork from "./BoardExtraInfoArtwork";
import { Border, Color, Padding } from "../../../GlobalStyles";

const Picture = () => {
  return (
    <View style={styles.picture}>
      <BoardExtraInfoArtwork
      />
      <Image
        style={styles.fullscreenpictureicon}
        contentFit="cover"
        source={require("../../../assets/fullscreenpictureicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenpictureicon: {
    position: "absolute",
    marginLeft: -10.5,
    top: 26,
    left: "50%",
    width: 20,
    height: 20,
    zIndex: 1,
  },
  picture: {
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 381,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
  },
});

export default Picture;
