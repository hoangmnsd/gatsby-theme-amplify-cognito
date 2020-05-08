# Gatsby Theme Cognito with Amplify

A wrapper theme to use Cognito (Amplify AWS) with your Gatsby website.

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1. Install the theme

   ```sh
   npm install --save @webriq/gatsby-theme-amplify-cognito
   ```

2. Set up a **Cognito User Pool in AWS** and create an **App Client**. Ensure that the **App client secret** setting is set to **no secret key**.

   NOTE: When using AWS Console, uncheck **Generate secret client** on **App client** settings.

3. Add the theme to your `gatsby-config.js`. See example below:

   ```js
   module.exports = {
     plugins: [
       {
         resolve: `@webriq/gatsby-theme-amplify-cognito`,
         options: {
           region: "us-east-1", // replace with region of user pool
           userPoolId: 'us-east-1_OZIxeIDqs",' // replace with user pool id
           identityPoolId: "23ab3gt81t2sanvfg84mh7xnpp" // replace with identity pool associated with user pool
           userPoolWebClientId:
             "us-east-1:bc89f200-299e-4269-8fd2-7caf9e8b0547", // replace with app client id

           // optional, array of paths that won't be authenticated
           doNotAuthenticate: ["/", "/page-2/"],
         },
       },
     ],
   }
   ```

4. Populate the `userPoolId` with the Pool Id found under **General settings** in **User Pools**, and `userPoolWebClientId` with the **App client ID** found under **App client settings**.

5. Populate the `identityPoolId` with the id of the identity pool associated with your user pool.

   > NOTE: IF you want to use AWS Service Objects, you will need to setup an identity pool and configure this setting. See **Federated Identities**.

6. (Optional) Configure any paths that don't require authentication by populating `doNotAuthenticate` with an array of paths. Make sure to append `/` at the end as paths in Gatsby are always trailed with slashes.

7. Each page is passed a prop of `authState` and `authData` which contain the details of the user session.

8. Use the components to create your page:

   ```jsx
   import { SignIn, SignOut } from "@webriq/gatsby-theme-amplify-cognito";

   const Homepage = ({ authState, authData }) => {
     return (
       <section>
         {authState !== "signedIn" ? (
           <SignIn authState={authState} />
         ) : (
           <>
             <h1>Hello {authData.username}</h1>
             <SignOut />
           </>
         )}
       </section>
     );
   };
   ```

9. Start your site

   ```sh
   gatsby develop
   ```

## Credits

Forked from the awesome and original work of [https://github.com/trsben/gatsby-theme-amplify-cognito](https://github.com/trsben/gatsby-theme-amplify-cognito).
