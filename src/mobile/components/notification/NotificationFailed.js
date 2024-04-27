import * as React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const NotificationFailed = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <View style={styles.notificationfailed}>
      <View style={styles.notificationfailedInner}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../../assets/frame-67.png")}
        />
      </View>
      <Image
        style={styles.notificationfailedChild}
        contentFit="cover"
        source={require("../../assets/group-24.png")}
      />
      <Text style={[styles.failed, styles.failedFlexBox]}>Failed</Text>
      <Text style={[styles.referenceSiteAboutLorem, styles.failedFlexBox]}>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  failedFlexBox: {
    textAlign: "center",
    marginTop: 15,
  },
  frameChild: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  notificationfailedInner: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  notificationfailedChild: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  failed: {
    fontSize: FontSize.headline3Bold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelMediumBold,
    color: Color.primaryPrimary,
  },
  referenceSiteAboutLorem: {
    fontSize: FontSize.labelLargeBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.labelLargeMedium,
    color: Color.primaryPrimaryFixed,
    alignSelf: "stretch",
  },
  notificationfailed: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    shadowColor: "#d9cfbe",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 300,
    height: 300,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default NotificationFailed;
