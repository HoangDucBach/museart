import * as React from "react";
import { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Padding, FontFamily, Border, FontSize } from "../../GlobalStyles";
import { useTheme } from "@react-navigation/native";
import axios from "axios";
import { localhost } from "../../services/api";
import { AuthContext } from "../../context/authContext";

const CommentFrame = ({
  id,
  date,
  text,
}) => {
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { userInfo } = useContext(AuthContext);


  const getUserById = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${localhost}/auth/${id}`);
      setData(response.data.username);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getUserById();
  }, [])

  return (
    <View style={[styles.frameParent, {backgroundColor: colors.surfaceContainerHighest, shadowColor: colors.primaryShadow}]}>
      <View style={styles.usernameParent}>
        <Text style={[styles.username, styles.usernameTypo, { color: colors.onSurfaceVarient }]}>{data}</Text>
        <Text style={[styles.ddmmyyyy, styles.usernameTypo, { color: colors.primary }]}>{date}</Text>
      </View>
      <Text
        style={[styles.text, { color: colors.onSurface }]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  usernameTypo: {
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    textAlign: "left",
  },
  username: {
    fontSize: FontSize.labelLargeBold_size,
  },
  ddmmyyyy: {
    fontSize: FontSize.size_sm,
  },
  usernameParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.typographyLabelLarge,
    fontSize: FontSize.labelLargeBold_size,
    alignSelf: "stretch",
    textAlign: "left",
    marginTop: 10,
  },
  frameParent: {
    borderRadius: Border.br_3xs,
    marginTop: 10,
    marginHorizontal: 10,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 0.4,
  },
});

export default CommentFrame;
