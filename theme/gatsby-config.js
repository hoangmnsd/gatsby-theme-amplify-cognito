module.exports = ({
  region = '',
  userPoolId = '',
  identityPoolId = '',
  userPoolWebClientId = '',
  doNotAuthenticate = [],
  doAuthenticate = []
}) => ({
  siteMetadata: {
    title: "Gatsby Theme Amplify with Cognito",
  },
  plugins: [

  ],
})
