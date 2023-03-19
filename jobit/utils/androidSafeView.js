import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS } from "../constants";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});