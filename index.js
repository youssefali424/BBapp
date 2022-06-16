import ProfileCustomScreen from "./components/ProfileCustomScreen";

export const applyCustomCode = (externalCodeSetup: any) => {
  externalCodeSetup.navigationApi.addNavigationRoute(
    "book",
    "BookScreen",
    ProfileCustomScreen,
    "All"
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "book",
    "BookScreen",
    ProfileCustomScreen,
    "Main"
  );
};
