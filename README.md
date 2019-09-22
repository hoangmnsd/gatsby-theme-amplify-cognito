# Gatsby Theme Cognito with Amplify

A wrapper theme to use Cognito (Amplify AWS) with your Gatsby website.

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-amplify-cognito
    ```

2.  Set up a Cognito User Pool in AWS and create an App Client. Ensure that the 'App client secret' setting is set to '(no secret key)'

3.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [{
        resolve: `gatsby-theme-amplify-cognito`,
        options: {
            region: '',
            userPoolId: '',
            userPoolWebClientId: '',

            // optional, array of paths that won't be authenticated
            doNotAuthenticate: ['/foo', '/bar/baz'],
        },
    }]
    }
    ```

4. Populate the userPoolId with the Pool Id found under 'General Settings', and userPoolWebClientId with the 'App client id' found under 'App clients'

5. (Optional) Configure any paths that don't require authentication by populating doNotAuthenticate with an array of paths

6. Each page is passed a prop of authState and authData which contain the details of the user session

7. Use the components to create your page:
    ```js
    import { SignIn, SignOut } from 'gatsby-theme-amplify-cognito';

    const Homepage = ({authState, authData}) => {
        return <section>
            {(authState !== "signedIn") ?
                <SignIn authState={authState} /> :
                <>
                    <h1>Hello {authData.username}</h1>
                    <SignOut />
                </>
            }
        </section>
    }
    ```

8. Start your site
    ```sh
    gatsby develop
    ```
