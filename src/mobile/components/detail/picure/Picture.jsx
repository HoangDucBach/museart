import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import BoardExtraInfoArtwork from "./BoardExtraInfoArtwork";
import { Border, Color, Padding } from "../../../GlobalStyles";

const Picture = ({ imagePath, commentAmount, likeAmount, date }) => {
  return (
    <ImageBackground
      source={{ uri: imagePath }}
      resizeMode="cover"
      style={styles.picture}
    >
      <BoardExtraInfoArtwork
        commentAmount={commentAmount}
        likeAmount={likeAmount}
        date={date}
      />
      <Image
        style={styles.fullscreenpictureicon}
        contentFit="cover"
        source={require("../../../assets/fullscreenpictureicon.png")}
      />
    </ImageBackground>
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
