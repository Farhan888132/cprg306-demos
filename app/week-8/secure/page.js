"use client";

import { useUserAuth} from "../_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    if (!user){
        return <div>Go away!</div>
    }
    return (
        <div>
        <h1>Week 8</h1>
        <p>Welcome to Week 8 of the 12-Week Bootcamp!</p>
        <p>
            {user ? (
            <button onClick={firebaseSignOut}>Sign Out</button>
            ) : (
            <button onClick={gitHubSignIn}>Sign In with GitHub</button>
            )}
        </p>
        </div>
    );
    
}