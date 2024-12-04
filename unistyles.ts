import { StyleSheet } from "react-native-unistyles";

interface Themes {
  readonly light: (typeof themes)["light"];
  readonly dark: (typeof themes)["dark"];
}

declare module "react-native-unistyles" {
  // eslint-disable-next-line import/no-unused-modules, @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends Themes {}
}

const themes = {
  light: {
    background: "#ffffff",
    box: "#0000ff",
  },

  dark: {
    background: "#000000",
    box: "#ff0000",
  },
};

StyleSheet.configure({
  themes,
  settings: {
    adaptiveThemes: true,
  },
});
