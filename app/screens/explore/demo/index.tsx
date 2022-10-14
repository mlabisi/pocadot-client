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

export const addListingSections = [
  {
    key: "frontImage",
    title: "Photocard Image - Front",
    description: "Scan the front of your photocard.",
    component: "scanCard",
  },
  {
    key: "backImage",
    title: "Photocard Image - Back",
    description: "Scan the back of your photocard.",
    component: "scanCard",
  },
  {
    key: "idolName",
    title: "Idol",
    component: "dropdown",
  },
  {
    key: "release",
    title: "Era / Release",
    description: "Share the name of the album, season’s greetings, era, etc that this photocard came from.",
    component: "textInput",
  },
  {
    key: "description",
    title: "Description",
    description: "This description will be included on your listing’s detail page underneath the image. If you'd like to trade, be sure to provide a description of what you're looking for.",
    component: "largeTextInput",
  },
  {
    key: "condition",
    title: "Condition",
    component: "dropdown",
  },
  {
    key: "type",
    title: "Listing Type",
    description: "Whether you would like to list your item as for sale or as available to trade. You can mark your listing as both if you’d like!",
    component: "options",
  },
  {
    key: "price",
    title: "Starting Price",
    description: "What’s the lowest amount you’d be willing to accept for this photocard?",
    component: "textInput",
  },
  {
    key: "international",
    title: "International Shipping",
    component: "switch",
  },
]
