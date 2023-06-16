"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function User({}: Props) {
  const { data: session } = useSession();

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
