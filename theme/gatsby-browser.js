import React from "react"
import Amplify from "aws-amplify"
import { AuthenticatorProvider } from "./src/components/amplify"

export const wrapPageElement = ({ element, props }, options) => {
  Amplify.configure({
    region: options.region,
    userPoolId: options.userPoolId,
    userPoolWebClientId: options.userPoolWebClientId,
    identityPoolId: options.identityPoolId,
  })

  // `doNotAuthenticate` and `doAuthenticate` cannot present at the same time!
  if (
    options.hasOwnProperty('doNotAuthenticate') == true &&
    options.hasOwnProperty('doAuthenticate') == true
  ) {
    // console.log("`doNotAuthenticate` and `doAuthenticate` cannot present at the same time!")
    return <AuthenticatorProvider>{element}</AuthenticatorProvider>
  }

  // `doNotAuthenticate` setting only
  if (
    options.hasOwnProperty('doAuthenticate') == false &&
    options.hasOwnProperty('doNotAuthenticate') == true
  ) {
      if (
        options.doNotAuthenticate.includes(props.path)
      ) {
          return element
      }
      return <AuthenticatorProvider>{element}</AuthenticatorProvider>
  }

  // `doAuthenticate` setting only
  if (
    options.hasOwnProperty('doAuthenticate') == true &&
    options.hasOwnProperty('doNotAuthenticate') == false
  ) {
    for (const opt of options.doAuthenticate) {
      if (
        props.path.includes(opt)
      ) {
        return <AuthenticatorProvider>{element}</AuthenticatorProvider>
      }
    }
    return element
  }

  // `doNotAuthenticate` and `doAuthenticate` is not configured
  if (
    options.hasOwnProperty('doNotAuthenticate') == false &&
    options.hasOwnProperty('doAuthenticate') == false
  ) {
    return element
  }

}
