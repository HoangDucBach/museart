import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useTheme } from "@react-navigation/native";

const NotificationSuccess = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.notificationsuccess, {backgroundColor: colors.surfaceContainerHighest, shadowColor: colors.primaryShadow}]}>
      <View style={styles.notificationsuccessInner}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../../assets/frame-67.png")}
        />
      </View>
      <Image
        style={styles.notificationsuccessChild}
        contentFit="cover"
        source={require("../../assets/frame-97.png")}
      />
      <Text style={[styles.success, styles.successFlexBox]}>Success</Text>
      <Text style={[styles.referenceSiteAboutLorem, styles.successFlexBox, {marginBottom: 5}]}>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successFlexBox: {
    textAlign: "center",
    marginTop: 15,
  },
  frameChild: {
    width: 25,
    height: 25,
  },
  notificationsuccessInner: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  notificationsuccessChild: {
    borderRadius: Border.br_981xl,
    width: 100,
    height: 100,
    marginTop: 15,
  },
  success: {
    fontSize: FontSize.headline3Bold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelMediumBold,
    color: Color.colorMediumseagreen_200,
  },
  referenceSiteAboutLorem: {
    fontSize: FontSize.labelLargeBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.labelLargeMedium,
    color: Color.primaryPrimaryFixed,
    alignSelf: "stretch",
  },
  notificationsuccess: {
    borderRadius: Border.br_3xs,
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
  },
});

export default NotificationSuccess;
