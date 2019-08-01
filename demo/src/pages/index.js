import React from 'react';
import { SignIn, SignOut } from 'gatsby-theme-amplify-cognito';

const Homepage = (props) => {
    return <section>
        {(props.authState !== "signedIn") ?
            <SignIn authState={props.authState} /> :
            <>
                <h1>Hello {props.authData.username}</h1>
                <SignOut />
            </>
        }
    </section>
}

export default Homepage;
