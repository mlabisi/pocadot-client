const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  suggestions: {
    title: "Recommendations",
    preferences: {
      title: "Recommendation Preferences",
    },
  },
  explore: {
    title: "Explore",
    listings: {
      add: "Add a New Listing",
      featured: "Featured Listings",
    },
    search: {
      placeholder: "Search from groups and idols",
      filter: "Filter Listings",
    },
  },
  saved: {
    title: "Saved",
  },
  myProfile: {
    title: "My Profile",
    listings: "My Listings",
    offers: "My Offers",
    edit: {
      title: "Edit Profile",
    },
  },
  more: {
    title: "More",
    biases: {
      title: "My Biases"
    },
    settings: {
      title: "Settings",
      delete: "Delete Account",
      password: "Change Password",
      notifications: "Push Notifications",
      security: "Security",
      language: "Language",
      country: "Country",
      help: "Help Center",
    }
  },
}

export default en
export type Translations = typeof en
