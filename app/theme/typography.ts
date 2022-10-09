import { Platform } from "react-native"

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Jua_400Regular as juaRegular } from "@expo-google-fonts/jua"
import {
  Urbanist_400Regular as urbanistRegular,
  Urbanist_300Light as urbanistLight,
  Urbanist_500Medium as urbanistMedium,
  Urbanist_600SemiBold as urbanistSemiBold,
  Urbanist_700Bold as urbanistBold,
} from "@expo-google-fonts/urbanist"

export const customFontsToLoad = {
  juaRegular,
  urbanistRegular,
  urbanistLight,
  urbanistMedium,
  urbanistSemiBold,
  urbanistBold,
  ionIcons: Ionicons.font.ionicons,
  materialCommunityIcons: MaterialCommunityIcons.font['material-community'],
}

const fonts = {
  jua: {
    normal: "juaRegular",
  },
  urbanist: {
    light: "urbanistLight",
    normal: "urbanistRegular",
    medium: "urbanistMedium",
    semiBold: "urbanistSemiBold",
    bold: "urbanistBold",
  },
}

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,

  /**
   * The primary font.  Used in most places.
   */
  primary: fonts.urbanist,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: fonts.jua,

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: "Courier", android: "monospace" }),
}
