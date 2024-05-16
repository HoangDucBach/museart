import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const FrameComponent = ({
    onFramePressablePress,
    frameImage,
    title,
    text,

}) => {
    const { colors } = useTheme();
    return (
        // style={[styles.frameWrapper]}
        <Pressable className={'w-screen flex flex-col gap-4 items-center justify-center p-2.5'}
            onPress={onFramePressablePress}>
            <Image
                source={{ uri: frameImage }}
                style={{ width: '100%', height: 'auto', aspectRatio: 1, borderRadius: 16 }}

            />
            <View style={[styles.titleParent]}>
                <Text className={'w-full font-playfairBold break-words'} style={{color: colors.onSurface}}>{title}</Text>
                <Text className={'w-full font-playfair break-words'} style={{color: colors.onSurface}}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    titleParent: {
        flex: 1,
        // paddingLeft: 5,
        alignSelf: "stretch",
        justifyContent: "flex-end",
        overflow: "hidden",
    },
    // frameWrapper: {
    //     flex: 1,
    //     borderRadius: Border.br_3xs,
    //     backgroundColor: Color.surfaceSurfaceContainer,
    //     justifyContent: "flex-end",
    //     // padding: Padding.p_3xs,
    //     margin: 5,
    //     overflow: "hidden",
    // },
});

export default FrameComponent;
