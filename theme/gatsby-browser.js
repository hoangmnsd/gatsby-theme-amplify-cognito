import React from "react"
import Amplify from "aws-amplify"
import { AuthenticatorProvider } from "./src/components/amplify"

export const wrapPageElement = ({ element, props }, options) => {
  if (
    typeof options.doNotAuthenticate == "object" &&
    options.doNotAuthenticate.includes(props.path)
  ) {
    return element
  }

  Amplify.configure({
    region: options.region,
    userPoolId: options.userPoolId,
    userPoolWebClientId: options.userPoolWebClientId,
    identityPoolId: options.identityPoolId,
  })

  return <AuthenticatorProvider>{element}</AuthenticatorProvider>
}
