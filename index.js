import ProfileCustomScreen from "./components/ProfileCustomScreen";

export const applyCustomCode = (externalCodeSetup: any) => {
	externalCodeSetup.navigationApi.replaceScreenComponent("ProfileXprofile", ProfileCustomScreen);
};
