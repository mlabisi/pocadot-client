import { palette } from "./palette"

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
  background: palette.Greyscale50,
  /**
   * The main tinting color.
   */
  tint: palette.Primary500,
  /**
   * A subtle color used for borders and lines.
   */
  border: palette.ButtonDisabled,
  /**
   * A subtle color used for lines.
   */
  separator: palette.Greyscale200,
  /**
   * The default color of text in many components.
   */
  text: palette.Greyscale900,
  /**
   * Secondary information.
   */
  textDim: palette.Greyscale700,
  /**
   * Error messages and icons.
   */
  error: palette.Error,
  /**
   * Error messages and icons.
   */
  errorBackground: palette.TransparentRed,
}
