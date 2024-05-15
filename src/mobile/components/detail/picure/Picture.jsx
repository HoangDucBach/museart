import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  Pressable,
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
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ImageBackground
          contentFit="cover"
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: imagePath,
          }}
          alt={altText}
        >
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textX}>x</Text>
          </Pressable>
        </ImageBackground>
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
