import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    Jua: require("./Jua-Regular.ttf"),
    "Jua-Regular": require("./Jua-Regular.ttf"),
  })
}
