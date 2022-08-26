/**
 * Converts string to Title Case
 *
 * https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/64910248#64910248
 * @param str The string to convert.
 */
export function titleize(str: string) {
  let upper = true
  let newStr = ""
  for (let i = 0, l = str.length; i < l; i++) {
    // Note that you can also check for all kinds of spaces  with
    // str[i].match(/\s/)
    if (str[i] == " ") {
      upper = true
      newStr += str[i]
      continue
    }
    newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
    upper = false
  }
  return newStr
}
