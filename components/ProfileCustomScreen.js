import React from "react";
import { View, Text } from "react-native";
import XProfileScreen from "@src/containers/Custom/Profile/XProfileScreen";

const ProfileCustomScreen = (props) => {
  if (!props.isFocused) return null;

  return <XProfileScreen hideEditButton={true} {...props} />;
};

ProfileCustomScreen.navigationOptions = { header: null };

export default ProfileCustomScreen;
