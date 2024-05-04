import React, { useRef, useState, useEffect } from "react";
import { Text, StyleSheet, View, PanResponder, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import Dashboard from "../../components/header/Dashboard";
import FrameComponent from "../../components/FrameComponent";
import AboutTitle from "../../components/detail/content/AboutTitle";
import BoardExtraInfoArtwork from "../../components/detail/picure/BoardExtraInfoArtwork";
import { useDispatch } from "react-redux";
import { toggleMove } from "../../store";
import axios from "axios";
import { baseUrl } from "../../services/api";
import { ActivityIndicator } from "react-native";

const Artworks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // console.log(gestureState.dy);
        if (gestureState.dy > 5) dispatch(toggleMove(1));
        else if (gestureState.dy < -5) dispatch(toggleMove(-1));
      }
    })
  ).current;

  const [isLoading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState([]);

  const getArtworks = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/artworks`);
      // response.data.map((item) => console.log(item));
      setArtworks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderFrameRow = () => {
    const frameRows = [];
    let currentRow = [];
    artworks.map((item, index) => {
      currentRow.push(
        <FrameComponent key={item.detail.id}
          onFramePressablePress={() => { navigation.navigate('ArtworkDetail', { ID: item.detail.id }) }}
          frameImage={`https://www.artic.edu/iiif/2/${item.detail.image_id}/full/843,/0/default.jpg`}
          frameAspectRatio={Math.round(item.detail.thumbnail.width / item.detail.thumbnail.height * 10) / 10}
          height={200}
          index={index}
          title={item.detail.artwork_type_title}
          text={item.detail.thumbnail.alt_text}
        />
      );
      if (currentRow.length === 3 || index === artworks.length - 1) {
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
    getArtworks();
  }, []);

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Dashboard namePage={"Dashboard"}>
          {renderFrameRow()}
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

export default Artworks;
