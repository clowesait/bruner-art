"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function AuthButton() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <button
      onClick={user ? firebaseSignOut : gitHubSignIn}
      className=""
    >
      {user ? "Logout" : "Login"}
    </button>
  );
}