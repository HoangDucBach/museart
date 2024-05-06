import * as React from "react";
import { useSelector } from "react-redux";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import NavbarTop from "./NavbarTop";
import DashboardSearchEngine from "./DashboardSearchEngine";
import { Color, Border, Padding, FontSize, FontFamily, ColorDark } from "../../GlobalStyles";

const Dashboard = ({
    namePage,
    children,

}) => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);

    return (
        // style={[styles.artworks, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainer } : null]}
        <SafeAreaView className={'w-screen'}>
            {/* <View style={{paddingHorizontal: 10}}> */}
            <NavbarTop />
            {/* </View> */}
            <View style={styles.body}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text className={'text-white text-xl font-playfairBold'}>{namePage}</Text>
                </View>
                <DashboardSearchEngine />
            </View>
            <ScrollView contentContainerStyle={{}} className={'w-full'}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    artworks: {
        // padding: Padding.p_3xs,
        flex: 1,
        backgroundColor: Color.surfaceSurfaceContainer,
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "scroll",
    },
    dashboardtitleFlexBox: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingLeft: 10,
    },
    dashboard: {
        fontSize: FontSize.headline5Bold_size,
        color: Color.surfaceOnSurface,
        textAlign: "left",
        fontFamily: FontFamily.labelMediumBold,
        fontWeight: "700",
    },
    body: {
        alignSelf: "stretch",
        padding: Padding.p_3xs,
        alignItems: "center",
        overflow: "hidden",
    },
});

export default Dashboard;