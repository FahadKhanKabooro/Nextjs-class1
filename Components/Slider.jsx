import React from "react";
import Image from "next/image";
import logo from "../public/next.png";

export default function Slider() {
  return (
    <div>
      <Image className="w-full h-80" src={logo} alt="" />
    </div>
  );
}
