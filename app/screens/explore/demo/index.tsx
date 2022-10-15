import { Asset } from "expo-asset"

export const featuredListings = [
  {
    listedBy: "uriddeulgi",
    artistName: "Nayeon",
    releaseName: "IM NAYEON",
    listingTag: "Want to Sell",
    avatar: require("../../../../assets/images/demo/uriddeulgi.png"),
    image: require("../../../../assets/images/demo/nayeon.png"),
  },
  {
    listedBy: "papagowon",
    artistName: "Seulgi",
    releaseName: "28 Reasons",
    listingTag: "Want to Trade",
    avatar: require("../../../../assets/images/demo/papagowon.png"),
    image: require("../../../../assets/images/demo/seulgi.png"),
  },
  {
    listedBy: "likeasticker",
    artistName: "J",
    releaseName: "SO BAD",
    listingTag: "Want to Sell/Trade",
    avatar: require("../../../../assets/images/demo/likeasticker.png"),
    image: require("../../../../assets/images/demo/j.png"),
  },
  {
    listedBy: "itsgoindownnn",
    artistName: "Gowon",
    releaseName: "++",
    listingTag: "Want to Sell",
    avatar: require("../../../../assets/images/demo/itsgoindownnn.png"),
    image: require("../../../../assets/images/demo/gowon.png"),
  },
  {
    listedBy: "oonmixxoo",
    artistName: "Lisa",
    releaseName: "BLINK 2021",
    listingTag: "Want to Trade",
    avatar: require("../../../../assets/images/demo/oonmixxoo.png"),
    image: require("../../../../assets/images/demo/lisaListing.png"),
  },
  {
    listedBy: "oop",
    artistName: "Yeji",
    releaseName: "Crazy in Love",
    listingTag: "Want to Sell/Trade",
    avatar: require("../../../../assets/images/demo/oop.png"),
    image: require("../../../../assets/images/demo/yejiListing.png"),
  },
  {
    listedBy: "like_puppy_puppy",
    artistName: "Yoon",
    releaseName: "STEREOTYPE",
    listingTag: "Want to Sell/Trade",
    avatar: require("../../../../assets/images/demo/like_puppy_puppy.png"),
    image: require("../../../../assets/images/demo/yoonListing.png"),
  },
]

export const curations = [
  {
    image: { uri: Asset.fromModule(require("../../../../assets/images/demo/girlGroups.png")).uri },
  },
  {
    image: { uri: Asset.fromModule(require("../../../../assets/images/demo/boyGroups.png")).uri },
  },
]
