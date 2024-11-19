import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    console.log("User is not authenticated. Redirecting...");
    throw redirect("/login?message=You must log in first.");
  }

  return null;
}
