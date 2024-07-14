"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function LoginButton() {
  return (
    <form
      action={async () => {
        await signIn("auth0");
      }}
    >
      <Button type="submit">Login</Button>
    </form>
  );
}
