import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import ButtonPrimary from "./ButtonPrimary";

const ArticleComponent =({
    article,
    date,
    text,
}) => {
    
    return (
        <View style={{padding: 10}}>
            <Text style={[styles.username, styles.usernameTypo]}>{article}</Text>
            <Text style={[styles.ddmmyyyy, styles.usernameTypo]}>{date}</Text>
            <Text style={styles.text}>{text}</Text>
            <Pressable style={{marginTop: 5}}>
                <Text style={[styles.readMore]}>Read more</Text>
            </Pressable>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 10,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    fontSize: FontSize.labelSmallRegular_size,
    color: Color.surfaceOnSurfaceVarient,
    },
    text: {
        fontFamily: FontFamily.typographyLabelLarge,
        color: Color.surfaceOnSurface,
        fontSize: FontSize.labelLargeBold_size,
        alignSelf: "stretch",
        textAlign: "left",
    },
    readMore: {
        color: Color.primaryPrimary,
        fontSize: FontSize.labelMediumBold_size,
        fontFamily: FontFamily.labelLargeMedium,
        fontWeight: "700"
    },

});

export default ArticleComponent;