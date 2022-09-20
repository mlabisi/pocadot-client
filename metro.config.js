// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config")

// For one idea on how to support symlinks in Expo, see:
// https://github.com/infinitered/ignite/issues/1904#issuecomment-1054535068
const MetroConfig = require("@ui-kitten/metro-config")

const evaConfig = {
  evaPackage: "@eva-design/eva",
  // Optional, but may be useful when using mapping customization feature.
  // customMappingPath: './custom-mapping.json',
}

module.exports = MetroConfig.create(evaConfig, getDefaultConfig(__dirname))
