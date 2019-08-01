import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

class AuthenticatorProvider extends Component {
    componentDidMount() {
        Amplify.configure({
            region: this.props.options.region,
            userPoolId: this.props.options.userPoolId,
            userPoolWebClientId: this.props.options.userPoolWebClientId
        });
    }

    render() {
        return (
            <Authenticator hideDefault={true}>
                {React.cloneElement(this.props.children, {
                    userStatus: this.props.authState,
                    userData: this.props.authData
                })}
            </Authenticator>
        )
    }
}

export default AuthenticatorProvider;
