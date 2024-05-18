import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  Pressable
} from "react-native";
import { Image } from "expo-image";
import BoardExtraInfoArtwork from "./BoardExtraInfoArtwork";
import { Border, Color, FontSize, Padding } from "../../../GlobalStyles";

const Picture = ({ imagePath, commentAmount, likeAmount, date, altText }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={{ uri: imagePath }}
      resizeMode="cover"
      style={styles.picture}
      alt={altText}
    >
      <BoardExtraInfoArtwork
        commentAmount={commentAmount}
        likeAmount={likeAmount}
        date={date}
      />
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image
          style={styles.fullscreenpictureicon}
          contentFit="cover"
          source={require("../../../assets/fullscreenpictureicon.png")}
        />
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade" transparent={true} style={{flex: 1}}>
        <Pressable style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0.85)"}} onPress={() => setModalVisible(false)}>
          <ImageBackground
          style={{ flex: 1 }}
          source={{ uri: imagePath }}
          resizeMode="contain"
          accessibilityLabel={altText}
           />
        </Pressable>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fullscreenpictureicon: {
    position: "absolute",
    top: 20,
    width: 20,
    height: 20,
    zIndex: 1,
  },
  picture: {
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    height: Dimensions.get("screen").width,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
  },
  textX: {
    color: "white",
    fontSize: FontSize.headline2Bold_size,
    textAlign: "right",
    padding: 10,
  },
});

export default Picture;
