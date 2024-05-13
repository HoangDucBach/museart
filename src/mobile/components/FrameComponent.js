import * as React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { ImageBackground } from "react-native";

const FrameComponent = ({
    onFramePressablePress,
    frameImage,
    title,
    text,

}) => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);

    return (
        // style={[styles.frameWrapper]}
        <Pressable className={'w-screen flex flex-col gap-4 items-center justify-center p-2.5'}
            onPress={onFramePressablePress}>
            <Image
                source={{ uri: frameImage }}
                style={{ width: '95%', height: 'auto', aspectRatio: 1, borderRadius: 16 }}

            />
            <View style={styles.titleParent}>
                <Text className={'w-full text-white font-playfairBold break-words'}>{title}</Text>
                <Text className={'w-full text-white font-playfair break-words'}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    titleParent: {
        flex: 1,
        margin: 10,
        alignSelf: "stretch",
        justifyContent: "flex-end",
        overflow: "hidden",
    },
    frameWrapper: {
        flex: 1,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.surfaceSurfaceContainer,
        justifyContent: "flex-end",
        // padding: Padding.p_3xs,
        margin: 5,
        overflow: "hidden",
    },
});

export default FrameComponent;
