import initFirebase from '../lib/initFirebase'
import { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { setUserCookie } from '../lib/auth/userCookies'
import { mapUserData } from '../lib/auth/mapUserData'

initFirebase() // initialize firebase



const FirebaseAuth = ({signInUrl}) => {

    if(!signInUrl){
        signInUrl = ''
    }

    const firebaseAuthConfig = {
        signInFlow: 'popup',
        // Auth providers
        // https://github.com/firebase/firebaseui-web#configure-oauth-providers
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/'+signInUrl,
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
                const userData = mapUserData(user)
                setUserCookie(userData)
            },
        },
    }


    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])
    return (
        <div>
            {renderAuth ? (
                <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
            ) : null}
        </div>
    )
}

export default FirebaseAuth