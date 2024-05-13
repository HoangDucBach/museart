import * as React from "react";
import { useSelector } from "react-redux";
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
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
        <SafeAreaView className={'w-screen flex-1'}>
            {/* <View style={{paddingHorizontal: 10}}> */}
            <NavbarTop />
            {/* </View> */}
            <View style={styles.body}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text className={'text-white text-xl font-playfairBold'}>{namePage}</Text>
                </View>
                <DashboardSearchEngine />
            </View>
            <SafeAreaView className={'w-full flex-1'}>
                {children}
            </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    dashboardtitleFlexBox: {
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingLeft: 10,
    },
    body: {
        alignSelf: "stretch",
        padding: Padding.p_3xs,
        alignItems: "center",
        overflow: "hidden",
    },
});

export default Dashboard;