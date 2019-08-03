import React from 'react';
import Amplify from 'aws-amplify';
import { AuthenticatorProvider } from './src/components/amplify';

export const wrapPageElement = ({ element }, options) => {
    Amplify.configure({
        region: options.region,
        userPoolId: options.userPoolId,
        userPoolWebClientId: options.userPoolWebClientId
    });

    return <AuthenticatorProvider>{element}</AuthenticatorProvider>
}
