import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import {connect} from "react-redux";

const AutoLoginCustomScreen = (props) => {
  if (!props.isFocused) return null;

  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{
        headers: {
          Authorization: props.token,
        },
        uri: "https://test.evolutiontravel.community/ita/autologin-in-external-system/",
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
AutoLoginCustomScreen.navigationOptions = { header: null };
const mapStateToProps = (state) => ({
  token: state.auth.token,
});
export default connect(mapStateToProps)(AutoLoginCustomScreen);
