import { signOut } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Signout</button>
    </>
  );
}
