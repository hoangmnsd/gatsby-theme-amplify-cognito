import React from 'react';
import { AuthenticatorProvider } from './src/components/amplify';

export const wrapPageElement = ({ element }, options) => (
    <AuthenticatorProvider options={options}>
        {React.cloneElement(element, { user: "top bottom" })}
    </AuthenticatorProvider>
)
