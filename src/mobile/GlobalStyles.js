import store from "./store/index";

// Hàm helper để truy cập trạng thái Redux
export const getDarkModeState = () => {
  // return true;
    return store.getState().isDarkMode;
};

// Sử dụng hàm helper để lấy giá trị isDarkMode
const isDarkMode = getDarkModeState();

/* Colors */
export const Color = {
  surface:"#F5F2EC",
  surfaceSurfaceContainer: "#efe8dc",
  colorBlack: "#000",
  surfaceSurfaceContainerLow: "#F2ECE4",
  surfaceSurfaceContainerLowest: "#FFFFFF",
  surfaceSurfaceContainerHigh: "#f0e8d9",
  surfaceSurfaceContainerHighest: "#e7ddcc",
  colorDimgray_100: "#5b5b5b",
  surfaceOnSurfaceVarient: "#534341",
  primaryPrimaryFixed: "#868686",
  surfaceOutline: "#857371",
  colorGray_100: "#262626",
  surfaceOnSurface: "#231919",
  colorGray_200: "#1c1b14",
  colorGray_300: "#101010",
  colorGray_400: "rgba(12, 12, 12, 0.8)",
  primaryPrimary: "#a00000",
  primaryOnPrimary: "#f5f2ec",
  colorMediumseagreen_100: "#00c170",
  colorMediumseagreen_200: "#00c070",
  colorDarkslategray: "#363636",
  colorWhite: "#fff",
  primaryPrimary1: "rgba(208, 0, 0, 0.9)",
  primaryShadow:"#D9CFBE",
};
export const ColorDark = {
  surface: "#101010",
  surfaceSurfaceContainer: "#0D0D0D",
  surfaceSurfaceContainerLow: "#0C0C0C",
  surfaceSurfaceContainerLowest: "#0B0B0B",
  surfaceSurfaceContainerHigh: "#0F0F0F",
  surfaceSurfaceContainerHighest: "#1C1B19",
  surfaceOnSurfaceVarient: "#827775",
  surfaceOnSurface:"#F5F2EC",
  primaryPrimary:"#D00000",
  primaryShadow: "#040404",

}
/* fonts */
  export const FontFamily = {
      typographyLabelLarge: "PlayfairDisplay-Regular",
      labelMediumBold: "PlayfairDisplay-Bold",
      robotoMedium: "Roboto-Medium",
      labelLargeMedium: "PlayfairDisplay-Medium",
    };
    /* font sizes */
    export const FontSize = {
      labelSmallRegular_size: 10,
      typographyLabelSmall_size: 11,
      labelMediumBold_size: 13,
      size_sm: 14,
      labelLargeBold_size: 16,
      titleMediumBold_size: 20,
      headline5Bold_size: 24,
      bodyXlargeBold_size: 25,
      headline3Bold_size: 35,
      headline2Bold_size: 41,
    };
  /* Paddings */
  export const Padding = {
    p_3xs: 10,
    p_8xs: 5,
    p_xl: 20,
    p_mini: 15,
    p_31xl: 50,
    p_6xl: 25,
    p_181xl: 200,
  };
  /* border radiuses */
  export const Border = {
    br_18xl: 37,
    br_81xl: 100,
    br_12xs: 1,
    br_3xs: 10,
    br_xl: 20,
    br_6xl: 25,
    br_981xl: 1000,
    br_8xs: 5,
  };
