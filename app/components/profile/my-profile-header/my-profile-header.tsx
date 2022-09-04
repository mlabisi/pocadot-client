import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { AutoImage, Header, Text } from "../../index"
import { HEADER, HEADER_CONTENT, headerHeight, LINKS, PROFILE_PIC, TITLE } from "./styles"
import { RootStoreContext, useQuery } from "../../../models"
import { gql } from "graphql-request"
import { useContext, useEffect, useState } from "react"

const myPic = require("./myProfilePic.png")

export const MyProfileHeader = observer(function MyProfileHeader() {
  const { currentUserId } = useContext(RootStoreContext)
  const [user, setUser] = useState(null)

  const USER_PROFILE = gql`
      query UserProfile {
          users(input: {ids: ["${currentUserId}"]}){
              __typename
              id
              username
              description
              listings {
                  __typename
                  id
                  type
                  isFeatured
                  groups {
                      __typename
                      id
                      name
                  }
                  idols {
                      __typename
                      id
                      stageName
                  }
                  listedBy {
                      __typename
                      id
                      username
                  }
              }
          }
          userPreferences(input: {ids: ["${currentUserId}"]}) {
              __typename
              id
              ...on Idol {
                  __typename
                  id
                  stageName
              }
              ...on Group {
                  __typename
                  id
                  name
              }
          }
      }
  `

  const { data } = useQuery(USER_PROFILE)

  useEffect(() => {
    if (!!data) {
      // @ts-ignore there's no TypeScript support for data returned by a query written in gql
      setUser({ ...data.users[0], preferences: data.userPreferences })
    }
  }, [data])

  return (
    user && (
      <Header
        headerHeight={headerHeight}
        rightIcon={"pencil"}
        rightIconStyle={{ width: 20 }}
        style={HEADER}
        n={0.2}
      >
        <View style={HEADER_CONTENT}>
          <AutoImage source={myPic} style={PROFILE_PIC} />
          <Text text={`@${user.username}`} preset={"header"} />
          <Text text={user.description} style={TITLE} />
          <Text text={"ig | twt | carrd"} style={LINKS} />
        </View>
      </Header>
    )
  )
})
