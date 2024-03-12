"use client";

import { useUserAuth} from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div>
        <h1>Week 8</h1>
        <p>Welcome to Week 8 of the 12-Week Bootcamp!</p>
        <p>
            {user ? (
            <div>
            <h1>Welcome {user.displayName}</h1>
            <h1>Your email is {user.email}</h1>
            <button onClick={firebaseSignOut}>Sign Out</button>
            </div>
            ) : (
            <button onClick={gitHubSignIn}>Sign In with GitHub</button>
            )}
        </p>
        </div>
    );
}