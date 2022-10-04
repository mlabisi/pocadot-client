const palette = {
  primary: {
    500: "rgba(163, 176, 239, 1)",
    400: "rgba(183, 194, 242, 1)",
    300: "rgba(201, 210, 246, 1)",
    200: "rgba(218, 224, 249, 1)",
    100: "rgba(234, 237, 251, 1)",
  },
  status: {
    success: "rgba(23, 216, 113, 1)",
    info: "rgba(68, 121, 255, 1)",
    warning: "rgba(255, 220, 96, 1)",
    error: "rgba(255, 106, 96, 1)",
    disabled: "rgba(216, 216, 216, 1)",
    buttonDisabled: "rgba(133, 152, 249, 1)",
  },
  greyscale: {
    900: "rgba(33, 33, 33, 1)",
    800: "rgba(66, 66, 66, 1)",
    700: "rgba(97, 97, 97, 1)",
    600: "rgba(117, 117, 117, 1)",
    500: "rgba(158, 158, 158, 1)",
    400: "rgba(189, 189, 189, 1)",
    300: "rgba(224, 224, 224, 1)",
    200: "rgba(238, 238, 238, 1)",
    100: "rgba(245, 245, 245, 1)",
    50: "rgba(250, 250, 250, 1)",
  },
  gradients: {
    blue:
      "linear-gradient(90deg, rgba(195, 202, 236, 1) 0%, rgba(147, 159, 220, 1) 100%)",
    yellow:
      "linear-gradient(90deg, rgba(250, 204, 21, 1) 0%, rgba(255, 229, 128, 1) 100%)",
    purple:
      "linear-gradient(90deg, rgba(127, 45, 255, 1) 0%, rgba(153, 88, 255, 1) 100%)",
    green:
      "linear-gradient(90deg, rgba(7, 189, 116, 1) 0%, rgba(30, 228, 149, 1) 100%)",
    orange:
      "linear-gradient(90deg, rgba(251, 148, 0, 1) 0%, rgba(255, 171, 56, 1) 100%)",
    red:
      "linear-gradient(90deg, rgba(255, 77, 103, 1) 0%, rgba(255, 138, 155, 1) 100%)",
  },
  other: {
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(0, 0, 0, 1)",
    red: "rgba(245, 67, 54, 1)",
    pink: "rgba(234, 30, 97, 1)",
    purple: "rgba(157, 40, 172, 1)",
    deepPurple: "rgba(103, 58, 179, 1)",
    indigo: "rgba(63, 81, 178, 1)",
    blue: "rgba(26, 150, 240, 1)",
    lightBlue: "rgba(0, 169, 241, 1)",
    cyan: "rgba(0, 188, 211, 1)",
    teal: "rgba(0, 150, 137, 1)",
    green: "rgba(74, 175, 87, 1)",
    lightGreen: "rgba(139, 194, 85, 1)",
    lime: "rgba(205, 220, 76, 1)",
    yellow: "rgba(255, 235, 79, 1)",
    amber: "rgba(255, 192, 45, 1)",
    orange: "rgba(255, 152, 31, 1)",
    deepOrange: "rgba(255, 87, 38, 1)",
    brown: "rgba(122, 85, 72, 1)",
    blueGrey: "rgba(96, 125, 138, 1)",
  },
  dark: {
    one: "rgba(24, 26, 32, 1)",
    two: "rgba(31, 34, 42, 1)",
    three: "rgba(53, 56, 63, 1)",
  },
  backgroundColors: {
    blue: "rgba(245, 247, 255, 1)",
    yellow: "rgba(255, 254, 224, 1)",
    orange: "rgba(255, 248, 237, 1)",
    green: "rgba(242, 255, 252, 1)",
    pink: "rgba(255, 245, 245, 1)",
    purple: "rgba(252, 244, 255, 1)",
  },
  transparentColors: {
    blue: "rgba(163, 176, 239, 0.07999999821186066)",
    yellow: "rgba(250, 204, 21, 0.07999999821186066)",
    orange: "rgba(255, 152, 0, 0.07999999821186066)",
    purple: "rgba(156, 39, 176, 0.07999999821186066)",
    red: "rgba(247, 85, 85, 0.07999999821186066)",
    green: "rgba(76, 175, 80, 0.07999999821186066)",
    cyan: "rgba(0, 188, 212, 0.07999999821186066)",
  },
}

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.greyscale["50"],
  /**
   * The main tinting color.
   */
  tint: palette.primary["500"],
  /**
   * A subtle color used for borders and lines.
   */
  border: palette.status.buttonDisabled,
  /**
   * A subtle color used for lines.
   */
  separator: palette.greyscale["200"],
  /**
   * The default color of text in many components.
   */
  text: palette.greyscale["900"],
  /**
   * Secondary information.
   */
  textDim: palette.greyscale["700"],
  /**
   * Error messages and icons.
   */
  error: palette.status.error,
  /**
   * Error messages and icons.
   */
  errorBackground: palette.transparentColors.red,
  /**
   * The background for cards.
   */
  cardBackground: palette.other.white
}
