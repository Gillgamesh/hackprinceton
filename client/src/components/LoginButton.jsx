import React from 'react';

import { useBlockstack } from 'react-blockstack';
 
export default function LoginButton () {
    const { signIn, signOut } = useBlockstack()
    return (
        <button disabled={ !signIn && !signOut }
                onClick={ signIn || signOut }>
            { signIn ? "Sign In" : signOut ? "Sign Out" : "Pending" }
        </button>
    )
}

