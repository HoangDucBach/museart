import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import SettingsMenu from "../../components/header/SettingsMenu";
import Dashboard from "../../components/header/Dashboard";
import Comment from "../../components/Comment";
import FrameComponent from "../../components/FrameComponent";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { baseUrl } from "../../services/api";

const Exhibitions = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [exhibitions, setExhibitions] = useState([]);

  const getExhibitions = async () => {
      try {
          const response = await axios.get(`${baseUrl}/api/exhibitions`);
          response.data.map((item) => console.log(item));
          setExhibitions(response.data);
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
      }
  };

  const renderFrameRow = () => {
    const frameRows = [];
    let currentRow = [];
    exhibitions.map((item, index) => {
      currentRow.push(
        <FrameComponent key={item.detail.id}
                        id={item.detail.id}
                        frameImage={item.detail.image_url}
                        // frameAspectRatio={Math.round(item.detail.thumbnail.width/item.detail.thumbnail.height * 10) / 10}
                        height={200}
                        index={index}
                        title={item.detail.title}
                        // text={item.detail.thumbnail.alt_text}                        
                        />
      );
      if (currentRow.length === 3 || index === exhibitions.length - 1) {
        frameRows.push(
          <View style={{ flexDirection: "row", flex: 1 }}>
            {currentRow}
          </View>
        );
        currentRow = [];
      }
    });
    return (
      <View>
        {frameRows}
      </View>
    )
  };
  
  
  useEffect(() => {
      getExhibitions();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Dashboard namePage={"Dashboard"}>
          { renderFrameRow() }
        </Dashboard>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  artworks: {
    backgroundColor: Color.surfaceSurfaceContainer,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "scroll",
  },
  dashboardtitleFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dashboard: {
    fontSize: FontSize.headline5Bold_size,
    color: Color.surfaceOnSurface,
    textAlign: "left",
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    flex: 1,
  },
  instanceParent: {
    flexWrap: "wrap",
    overflow: "hidden",
    flexDirection: "row",
    flex: 1,
  },
  titleParentFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameWrapperSpaceBlock: {
    marginLeft: 10,
    justifyContent: "flex-end",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  titleClr: {
    color: Color.primaryOnPrimary,
    textAlign: "left",
  },
  frameWrapperLayout: {
    height: 282,
    marginLeft: 10,
    justifyContent: "flex-end",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.titleMediumBold_size,
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    color: Color.primaryOnPrimary,
  },
  title1: {
    fontSize: FontSize.labelMediumBold_size,
    fontWeight: "300",
    fontFamily: FontFamily.labelLargeMedium,
    marginTop: 5,
  },
  frameWrapper: {
    height: 113,
    width: 128,
  },
  frameView: {
    width: 371,
    height: 258,
  },
  frameWrapper1: {
    width: 128,
  },
  frameWrapper2: {
    width: 233,
  },
  frameWrapper3: {
    height: 124,
    width: 128,
  },
  dashboardmain: {
    marginTop: 15,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  body: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Exhibitions;
