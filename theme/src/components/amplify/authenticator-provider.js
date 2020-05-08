import React from "react"
import { withAuthenticator } from "aws-amplify-react"

const AuthenticatorProvider = props =>
  React.cloneElement(props.children, {
    authState: props.authState,
    authData: props.authData,
  })

export default withAuthenticator(AuthenticatorProvider, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
  includeGreetings: true,
})
