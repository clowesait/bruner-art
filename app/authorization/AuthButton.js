"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function AuthButton() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <button
      onClick={user ? firebaseSignOut : gitHubSignIn}
      className="px-6 py-3 text-lg font-bold bg-amber-400 hover:bg-amber-600">
      {user ? "Logout" : "Login"}
    </button>
  );
}