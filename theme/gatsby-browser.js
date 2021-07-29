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

  if (
    options.hasOwnProperty('doNotAuthenticate') == true &&
    options.hasOwnProperty('doAuthenticate') == true
  ) {
    // console.log("`doNotAuthenticate` and `doAuthenticate` can not present at the same time!")
    return <AuthenticatorProvider>{element}</AuthenticatorProvider>
  }

  if (
    options.hasOwnProperty('doAuthenticate') == false &&
    options.hasOwnProperty('doNotAuthenticate') == true
  ) {
      // console.log("`doNotAuthenticate` setting only")
      if (
        options.doNotAuthenticate.includes(props.path)
      ) {
          // console.log("doNotAuthenticate included this path")
          return element
      }
      // console.log("doNotAuthenticate is not including this path")
      return <AuthenticatorProvider>{element}</AuthenticatorProvider>
  }

  if (
    options.hasOwnProperty('doAuthenticate') == true &&
    options.hasOwnProperty('doNotAuthenticate') == false
  ) {
    // console.log("`doAuthenticate` setting only")
    if (
      options.doAuthenticate.includes(props.path)
    ) {
      // console.log("doAuthenticate included this path")
      return <AuthenticatorProvider>{element}</AuthenticatorProvider>
    }
    // console.log("doAuthenticate is not including this path")
    return element
  }

  if (
    options.hasOwnProperty('doNotAuthenticate') == false &&
    options.hasOwnProperty('doAuthenticate') == false
  ) {
    // console.log("`doNotAuthenticate` and `doAuthenticate` is not configured")
    return element
  }

}
