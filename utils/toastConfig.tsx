import React from "react";
import {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";
import { fontFamily } from "./fontFamily";

let toastConfigs = {
  success: ({ ...rest }) => (
    <SuccessToast
      {...rest}
      text1Props={{ allowFontScaling: false }}
      text2Props={{ allowFontScaling: false }}
      text1Style={{
        fontWeight: "normal",
        fontFamily: fontFamily.nunitoSemiBold,
        textTransform: "capitalize",
        fontSize: 15,
        color: "white",
      }}
      style={{ borderRadius: 20, backgroundColor: "#5A9864" }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Props={{ allowFontScaling: false }}
      text2Props={{ allowFontScaling: false }}
      text1Style={{
        fontWeight: "normal",
        color: "white",
        fontFamily: fontFamily.nunitoSemiBold,
        textTransform: "capitalize",
        fontSize: 15,
      }}
      text2Style={{
        fontWeight: "normal",
      }}
      style={{ backgroundColor: "#ff5252", borderRadius: 20 }}
      text2NumberOfLines={0}
    ></ErrorToast>
  ),
  info: (props: any) => (
    <InfoToast
      {...props}
      text1Props={{ allowFontScaling: false }}
      text2Props={{ allowFontScaling: false }}
      text1Style={{
        fontWeight: "normal",
        fontFamily: fontFamily.nunitoSemiBold,
        textTransform: "capitalize",
      }}
      text2Style={{
        fontWeight: "normal",
        fontFamily: fontFamily.nunitoSemiBold,
        textTransform: "capitalize",
      }}
      style={{ borderRadius: 20 }}
    ></InfoToast>
  ),
};
export default toastConfigs;
