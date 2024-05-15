import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import NavbarTop from "./NavbarTop";
import DashboardSearchEngine from "./DashboardSearchEngine";
import { Padding } from "../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const Dashboard = ({
    namePage,
    children,

}) => {
    // const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const { colors } = useTheme();
    return (
        <SafeAreaView className={`w-screen flex-1`} style={{backgroundColor: colors.surfaceContainer}}>
            <NavbarTop />
            <View style={styles.body}>
                <View style={styles.dashboardtitleFlexBox}>
                    <Text className={'text-xl font-playfairBold'} style={{color: colors.onSurface}}>{namePage}</Text>
                </View>
                <DashboardSearchEngine />
            </View>
            <SafeAreaView className={'w-full flex-1 justify-center items-center'}>
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