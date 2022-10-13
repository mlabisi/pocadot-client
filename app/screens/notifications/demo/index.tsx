import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "../../../theme"
import React from "react"

const yoonListing = require("./yoonListing.png")
const lisaListing = require("./lisaListing.png")
const yejiListing = require("./yejiListing.png")

export const generalNotifis = [
  {
    description:
      "pocadot has Two-Factor Authentication! Try it now to make your account more secure.",
    label: "Security Updates!",
    timestamp: "Dec 20, 2022 | 10:49 PM",
    isNew: true,
    icon: <Ionicons name={"shield-checkmark"} color={colors.tint} size={20} />,
  },
  {
    description: "You can now track your real-life photocard collections using pocadot!",
    label: "Track Your Photocards!",
    timestamp: "Dec 19, 2022 | 7:22 AM",
    isNew: true,
    icon: <Ionicons name={"file-tray-full"} color={colors.tint} size={20} />,
  },
  {
    description: "Now you can offer one of your existing listings when making a trade!",
    label: "pocadot Has Updates!",
    timestamp: "Dec 10, 2022 | 11:54 AM",
    isNew: false,
    icon: <MaterialCommunityIcons name={"shield-star"} color={colors.tint} size={20} />,
  },
]
export const offerNotifs = [
  {
    image: yoonListing,
    topLabel: "papagowon wants to trade for...",
    topRightLabel: "New Trade Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "24 seconds ago",
    actionLabel: "+ view offer",
  },
  {
    image: yoonListing,
    topLabel: "itsgoingdownnn wants to buy...",
    topRightLabel: "New Buy Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "18 minutes ago",
    actionLabel: "+ view offer",
  },
  {
    image: lisaListing,
    topLabel: "oonmixxoo accepted your offer for...",
    topRightLabel: "Offer Accepted!",
    mainLabel: "Lisa · BLINK 2021",
    bottomRightLabel: "25 minutes ago",
    actionLabel: "+ message oonmixxoo",
  },
  {
    image: yoonListing,
    topLabel: "likeasticker wants to trade for...",
    topRightLabel: "New Trade Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "46 minutes ago",
    actionLabel: "+ view offer",
  },
  {
    image: lisaListing,
    topLabel: "You placed an offer for...",
    topRightLabel: "Offer Placed",
    mainLabel: "Lisa · BLINK 2021",
    bottomRightLabel: "6 hours ago",
    actionLabel: "+ view oonmixxoo's listing",
  },
  {
    image: yejiListing,
    topLabel: "You placed an offer for...",
    topRightLabel: "Offer Placed",
    mainLabel: "Yeji · Crazy In Love",
    bottomRightLabel: "8 hours ago",
    actionLabel: "+ view oop's listing",
  },
]
