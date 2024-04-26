import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../../GlobalStyles";
import FrameComponent from "./FrameButton";

const AboutArtist = () => {
    return (
        <View>
            <View
                style={[
                    styles.aboutArtistContainer,
                    styles.tagartistofartworkFlexBox,
                ]}
            >
                <Image
                    style={styles.aboutTheArtistChild}
                    contentFit="cover"
                    source={require("../../../assets/ellipse-4.png")}
                />
                <View
                    style={[styles.tagartistofartwork, styles.tagartistofartworkFlexBox]}
                >
                    <Text style={styles.aboutArtist}>About the artist</Text>
                </View>
            </View>
            <View
            style={[
              styles.containerfullinformationofartw,
              styles.descriptioncontainerFlexBox,
            ]}
          >
            <FrameComponent
              field="Date"
              value="1683-1686"
              propAlignSelf="stretch"              
              propColor="#231919"
            />
            <FrameComponent
              field="Museum"
              value="Chicago"
              propAlignSelf="stretch"              
              propColor="#101010"
            />
            <FrameComponent
              field="Size"
              value="6679 x 6577"
              propAlignSelf="stretch"              
              propColor="#231919"
            />
            <FrameComponent
              field="Place of Origin"
              value="England"
              propAlignSelf="stretch"              
              propColor="#231919"
            />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tagartistofartworkFlexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    aboutTheArtistChild: {
        width: 75,
        height: 75,
    },
    aboutArtist: {
        fontSize: FontSize.labelMediumBold_size,
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.primaryOnPrimary,
        textAlign: "center",
    },
    tagartistofartwork: {
        borderRadius: Border.br_81xl,
        backgroundColor: Color.primaryPrimary,
        padding: Padding.p_3xs,
        alignItems:"center"
    },
    aboutArtistContainer: {
        flexDirection:"column",
        width: Dimensions.get('window').width,
        justifyContent: "center",
        marginVertical: 15,
    },
});

export default AboutArtist;
