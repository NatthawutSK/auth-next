"use client";

import { Toaster } from "react-hot-toast";

type Props = {};

export default function ToasterContext({}: Props) {
  return (
    <div>
      <Toaster />
    </div>
  );
}
