import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import { Padding, Color, ColorDark, FontFamily, Border, FontSize } from "../GlobalStyles";
import ButtonPrimary from "./button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";

const ArticleComponent = ({
    article,
    date,
    text,
    id
}) => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const navigation = useNavigation();

    return (
        <View style={{ padding: 10 }}>
            <Text style={[styles.username, styles.usernameTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>{article}</Text>
            <Text style={[styles.ddmmyyyy, styles.usernameTypo, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]}>{date}</Text>
            <Text numberOfLines={3} style={[styles.text, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>{text}</Text>
            <TouchableOpacity onPress={() =>
                navigation.navigate('ArticleDetail', { ID: id })} style={{ marginTop: 5 }}>
                <Text style={[styles.readMore, isDarkMode ? { color: ColorDark.primaryPrimary } : null]}>Read more</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: isDarkMode ? "white" : "black",
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