import * as React from "react";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {Text, StyleSheet, View, Pressable, Image} from "react-native";
import {Color, FontSize, FontFamily, Border, Padding} from "../GlobalStyles";
import {ImageBackground} from "react-native";


const getStyleValue = (key, value) => {
    if (value === undefined) return;
    return {[key]: value === "unset" ? undefined : value};
};

const FrameComponent = ({
                            onFramePressablePress,
                            frameFlex,
                            frameAspectRatio,
                            frameImage,
                            height,
                            title,
                            text,

                        }) => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);

    const frameScale = useMemo(() => {
            return {
                ...getStyleValue("flex", frameFlex),
                ...getStyleValue("aspectRatio", frameAspectRatio)
            };
        }, [frameFlex, frameAspectRatio]
    );

    return (
        // style={[styles.frameWrapper]}
        <Pressable className={'w-screen flex flex-col gap-4 items-center justify-center'}
                   onPress={onFramePressablePress}>
            <Image
                source={{uri: frameImage}}
                style={{width: '100%', height: 'auto', aspectRatio: 1, borderRadius: 16}}

            />
            <View style={styles.titleParent}>
                <Text className={'w-full text-white font-playfairBold break-words'}>{title}</Text>
                <Text className={'w-full text-white font-playfair break-words'}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    titleFlexBox: {
        textAlign: "left",
        color: Color.primaryOnPrimary,
    },
    title: {
        fontSize: FontSize.titleMediumBold_size,
        fontWeight: "700",
        fontFamily: FontFamily.labelMediumBold,
    },
    title1: {
        fontSize: FontSize.labelSmallRegular_size,
        fontWeight: "300",
        fontFamily: FontFamily.labelLargeMedium,
        // marginTop: 5,
    },
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
