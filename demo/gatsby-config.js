/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@hoangmnsd/gatsby-theme-amplify-cognito`,
      options: {
        region: "",
        userPoolId: "",
        userPoolWebClientId: "",
      },
    },
  ],
}
