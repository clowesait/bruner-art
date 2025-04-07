"use client";

import { use, useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function AuthButton({ className }) {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

  // If user is logged in, show logout button, otherwise show login button
    return (
        <button
        onClick={user ? firebaseSignOut : gitHubSignIn}
        className={className}
        >
        {user ? "Logout" : "Login"}
        </button>
        );
}