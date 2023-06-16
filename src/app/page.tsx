import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "@/components/User";

type Props = {};

export default async function page({}: Props) {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2>Home</h2>
      <h1>Server Side</h1>
      <h4>{JSON.stringify(session)}</h4>
      <h1>Client Side</h1>
      <User />
    </div>
  );
}
