import { Button, View } from "react-native";
import AutoLoginCustomScreen from "./components/AutoLoginCustomScreen";
import ProfileCustomScreen from "./components/ProfileCustomScreen";

export const applyCustomCode = (externalCodeSetup) => {
  externalCodeSetup.navigationApi.replaceScreenComponent(
    "ProfileXprofile",
    ProfileCustomScreen
  );
  externalCodeSetup.navigationApi.replaceScreenComponent(
    "AutoLogin",
    AutoLoginCustomScreen
  );

  externalCodeSetup.settingsScreenApi.setAfterListComponent(
    SettingsAfterListComponent
  );
};
const SettingsAfterListComponent = (props) => {
  return (
    <View style={{ width: "80%", alignSelf: "center" }}>
      <Button
        title="Auto Login"
        onPress={() => props.navigation.navigate("AutoLogin")}
      />
    </View>
  );
};
